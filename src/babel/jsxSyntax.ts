import type { NodePath } from '@babel/traverse';
import type { PluginObj, PluginPass } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
// import annotateAsPure from '@babel/helper-annotate-as-pure';
import t from '@babel/types';

const get = (pass: PluginPass, name: string) =>
  pass.get(`@babel/plugin-react-jsx/${name}`);
const set = (pass: PluginPass, name: string, v: any) =>
  pass.set(`@babel/plugin-react-jsx/${name}`, v);

function hasProto(node: t.ObjectExpression) {
  return node.properties.some(
    value =>
      t.isObjectProperty(value, { computed: false, shorthand: false }) &&
      (t.isIdentifier(value.key, { name: '__proto__' }) ||
        t.isStringLiteral(value.key, { value: '__proto__' })),
  );
}

export const jsxSyntax = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/jsx-syntax',
    visitor: {
      Program: {
        enter(path, state) {
          const define = (name: string, id: string) =>
            set(state, name, createImportLazily(state, path, id, 'jsx-dom-runtime'));

          define('id/jsx', 'jsx');
          define('id/fragment', 'Fragment');
          // set(state, 'defaultPure', false);
        },
      },

      JSXFragment: {
        exit(path, file) {
          path.replaceWith(
            t.inherits(buildJSXFragmentCall(path, file), path.node),
          );
        },
      },

      JSXElement: {
        exit(path, file) {
          path.replaceWith(
            t.inherits(buildJSXElementCall(path, file), path.node),
          );
        },
      },

      JSXAttribute(path) {
        if (t.isJSXElement(path.node.value)) {
          path.node.value = t.jsxExpressionContainer(path.node.value);
        }
      },
    },
  };

  // Returns whether `this` is allowed at given scope.
  function call(
    pass: PluginPass,
    args: t.CallExpression['arguments'],
  ) {
    const node = t.callExpression(get(pass, 'id/jsx')(), args);
    // FIXME:
    // if (PURE_ANNOTATION ?? get(pass, 'defaultPure')) annotateAsPure(node);
    return node;
  }

  function convertJSXIdentifier(
    node: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
    parent: t.JSXOpeningElement | t.JSXMemberExpression,
  ): t.ThisExpression | t.StringLiteral | t.MemberExpression | t.Identifier {
    if (t.isJSXIdentifier(node)) {
      if (node.name === 'this' && t.isReferenced(node, parent)) {
        return t.thisExpression();
      } else if (t.isValidIdentifier(node.name, false)) {
        // @ts-expect-error cast AST type to Identifier
        node.type = 'Identifier';
        return node as unknown as t.Identifier;
      }
      return t.stringLiteral(node.name);

    } else if (t.isJSXMemberExpression(node)) {
      return t.memberExpression(
        convertJSXIdentifier(node.object, node),
        convertJSXIdentifier(node.property, node),
      );
    } else if (t.isJSXNamespacedName(node)) {
      /**
       * If the flag "throwIfNamespace" is false
       * print XMLNamespace like string literal
       */
      return t.stringLiteral(`${node.namespace.name}:${node.name.name}`);
    }

    // todo: this branch should be unreachable
    return node;
  }

  function convertAttributeValue(
    node: t.JSXAttribute['value'] | t.BooleanLiteral,
  ) {
    if (t.isJSXExpressionContainer(node)) {
      return node.expression;
    }
    return node;

  }

  function accumulateAttribute(
    array: t.ObjectExpression['properties'],
    attribute: NodePath<t.JSXAttribute | t.JSXSpreadAttribute>,
  ) {
    if (t.isJSXSpreadAttribute(attribute.node)) {
      const arg = attribute.node.argument;
      // Collect properties into props array if spreading object expression
      if (t.isObjectExpression(arg) && !hasProto(arg)) {
        array.push(...arg.properties);
      } else {
        array.push(t.spreadElement(arg));
      }
      return array;
    }

    const value = convertAttributeValue(
      attribute.node.name.name !== 'key'
        ? attribute.node.value || t.booleanLiteral(true)
        : attribute.node.value,
    );

    if (attribute.node.name.name === 'key' && value === null) {
      throw attribute.buildCodeFrameError(
        'Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.',
      );
    }

    if (
      t.isStringLiteral(value) &&
      !t.isJSXExpressionContainer(attribute.node.value)
    ) {
      value.value = value.value.replace(/\n\s+/g, ' ');

      // "raw" JSXText should not be used from a StringLiteral because it needs to be escaped.
      delete value.extra?.raw;
    }

    if (t.isJSXNamespacedName(attribute.node.name)) {
      // @ts-expect-error mutating AST
      attribute.node.name = t.stringLiteral(
        attribute.node.name.namespace.name +
        ':' +
        attribute.node.name.name.name,
      );
    } else if (t.isValidIdentifier(attribute.node.name.name, false)) {
      // @ts-expect-error mutating AST
      attribute.node.name.type = 'Identifier';
    } else {
      // @ts-expect-error mutating AST
      attribute.node.name = t.stringLiteral(attribute.node.name.name);
    }

    array.push(
      t.inherits(
        t.objectProperty(
          // @ts-expect-error The attribute.node.name is an Identifier now
          attribute.node.name,
          value,
        ),
        attribute.node,
      ),
    );
    return array;
  }

  function buildChildrenProperty(children: t.Expression[]) {
    let childrenNode;
    if (children.length === 1) {
      childrenNode = children[0];
    } else if (children.length > 1) {
      childrenNode = t.arrayExpression(children);
    } else {
      return undefined;
    }

    return t.objectProperty(t.identifier('children'), childrenNode);
  }

  // Builds JSX into:
  // Production: React.jsx(type, arguments, key)
  // Development: React.jsxDEV(type, arguments, key, isStaticChildren, source, self)
  function buildJSXElementCall(path: NodePath<t.JSXElement>, file: PluginPass) {
    const openingPath = path.get('openingElement');
    const args: t.Expression[] = [getTag(openingPath)];

    const attribsArray = [];
    const extracted = Object.create(null);

    // for React.jsx, key, __source (dev), and __self (dev) is passed in as
    // a separate argument rather than in the args object. We go through the
    // props and filter out these three keywords so we can pass them in
    // as separate arguments later
    for (const attr of openingPath.get('attributes')) {
      if (attr.isJSXAttribute() && t.isJSXIdentifier(attr.node.name)) {
        const { name } = attr.node.name;
        switch (name) {
          case '__source':
          case '__self':
            if (extracted[name]) throw sourceSelfError(path, name);
          /* falls through */
          case 'key': {
            const keyValue = convertAttributeValue(attr.node.value);
            if (keyValue === null) {
              throw attr.buildCodeFrameError(
                'Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.',
              );
            }

            extracted[name] = keyValue;
            break;
          }
          default:
            attribsArray.push(attr);
        }
      } else {
        attribsArray.push(attr);
      }
    }

    const children = t.react.buildChildren(path.node);

    let attribs: t.ObjectExpression;

    if (attribsArray.length || children.length) {
      attribs = buildJSXOpeningElementAttributes(
        attribsArray,
        //@ts-expect-error The children here contains JSXSpreadChild,
        // which will be thrown later
        children,
      );
    } else {
      // attributes should never be null
      attribs = t.objectExpression([]);
    }

    args.push(attribs);

    if (extracted.key !== undefined) {
      args.push(extracted.key);
    }

    return call(file, args);
  }

  // Builds props for React.jsx. This function adds children into the props
  // and ensures that props is always an object
  function buildJSXOpeningElementAttributes(
    attribs: NodePath<t.JSXAttribute | t.JSXSpreadAttribute>[],
    children: t.Expression[],
  ) {
    const props = attribs.reduce(accumulateAttribute, []);

    // In React.jsx, children is no longer a separate argument, but passed in
    // through the argument object
    if (children?.length > 0) {
      props.push(buildChildrenProperty(children));
    }

    return t.objectExpression(props);
  }

  // Builds JSX Fragment <></> into
  // Production: React.jsx(type, arguments)
  // Development: React.jsxDEV(type, { children })
  function buildJSXFragmentCall(
    path: NodePath<t.JSXFragment>,
    file: PluginPass,
  ) {
    const args = [get(file, 'id/fragment')()];

    const children = t.react.buildChildren(path.node);

    args.push(
      t.objectExpression(
        children.length > 0
          ? [
            buildChildrenProperty(
              //@ts-expect-error The children here contains JSXSpreadChild,
              // which will be thrown later
              children,
            ),
          ]
          : [],
      ),
    );

    return call(file, args);
  }

  function getTag(openingPath: NodePath<t.JSXOpeningElement>) {
    const tagExpr = convertJSXIdentifier(
      openingPath.node.name,
      openingPath.node,
    );

    let tagName: string;
    if (t.isIdentifier(tagExpr)) {
      tagName = tagExpr.name;
    } else if (t.isStringLiteral(tagExpr)) {
      tagName = tagExpr.value;
    }

    if (t.react.isCompatTag(tagName)) {
      return t.stringLiteral(tagName);
    }
    return tagExpr;
  }
};

function createImportLazily(
  pass: PluginPass,
  path: NodePath<t.Program>,
  importName: string,
  source: string,
): () => t.Identifier | t.MemberExpression {
  return () => {
    const actualSource = `${source}/jsx-runtime`;

    if (isModule(path)) {
      let reference = get(pass, `imports/${importName}`);
      if (reference) return t.cloneNode(reference);

      reference = addNamed(path, importName, actualSource, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      });
      set(pass, `imports/${importName}`, reference);

      return reference;
    }
    let reference = get(pass, `requires/${actualSource}`);
    if (reference) {
      reference = t.cloneNode(reference);
    } else {
      reference = addNamespace(path, actualSource, {
        importedInterop: 'uncompiled',
      });
      set(pass, `requires/${actualSource}`, reference);
    }

    return t.memberExpression(reference, t.identifier(importName));
  };
}

function sourceSelfError(path: NodePath, name: string) {
  const pluginName = `transform-react-jsx-${name.slice(2)}`;

  return path.buildCodeFrameError(
    `Duplicate ${name} prop found. You are most likely using the deprecated ${pluginName} Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config.`,
  );
}
