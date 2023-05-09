import type { NodePath } from '@babel/traverse';
import type { PluginObj, PluginPass } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

const annotateAsPure = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const get = (pass: PluginPass, name: string) =>
  pass.get(`jsx-dom-runtime/jsx-syntax/${name}`);
const set = (pass: PluginPass, name: string, v: any) =>
  pass.set(`jsx-dom-runtime/jsx-syntax/${name}`, v);

const hasProto = (node: t.ObjectExpression) => {
  return node.properties.some(
    value =>
      t.isObjectProperty(value, { computed: false, shorthand: false }) &&
      (t.isIdentifier(value.key, { name: '__proto__' }) ||
        t.isStringLiteral(value.key, { value: '__proto__' })),
  );
};

const buildChildrenProperty = (children: t.Expression[]): t.ObjectProperty => {
  return t.objectProperty(
    t.identifier('children'),
    children.length === 1
      ? children[0]
      : t.arrayExpression(children),
  );
};

export const jsxSyntax = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/jsx-syntax',
    visitor: {
      Program: {
        enter(path, state) {
          set(state, 'id/jsx', createImportLazily(state, path, 'jsx'));
          set(state, 'id/fragment', createImportLazily(state, path, 'Fragment'));
        },
      },

      JSXFragment: {
        exit(path, file) {
          const children = t.react.buildChildren(path.node) as t.Expression[];
          const child = t.callExpression(
            get(file, 'id/fragment')(),
            [
              t.objectExpression(
                children.length > 0
                  ? [buildChildrenProperty(children)]
                  : [],
              ),
            ]);

          annotateAsPure(child);
          path.replaceWith(t.inherits(child, path.node));
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
    return t.isJSXExpressionContainer(node) ? node.expression : node;
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
      attribute.node.value || t.booleanLiteral(true),
    );

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
        attribute.node.name.namespace.name + ':' + attribute.node.name.name.name,
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

  // Builds JSX into:
  // Production: React.jsx(type, arguments, key)
  function buildJSXElementCall(path: NodePath<t.JSXElement>, file: PluginPass) {
    const openingPath = path.get('openingElement');

    const attribsArray = openingPath.get('attributes');
    const children = t.react.buildChildren(path.node);

    const attribs = attribsArray.length || children.length
      ? buildJSXOpeningElementAttributes(attribsArray, children as t.Expression[])
      : t.objectExpression([]);

    const node = t.callExpression(
      get(file, 'id/jsx')(),
      [getTag(openingPath), attribs],
    );

    annotateAsPure(node);

    return node;
  }

  // Builds props for React.jsx. This function adds children into the props
  // and ensures that props is always an object
  function buildJSXOpeningElementAttributes(
    attribs: NodePath<t.JSXAttribute | t.JSXSpreadAttribute>[],
    children: t.Expression[],
  ) {
    const props = attribs.reduce(accumulateAttribute, []);

    if (children.length > 0) {
      props.push(buildChildrenProperty(children));
    }

    return t.objectExpression(props);
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
): () => t.Identifier | t.MemberExpression {
  return () => {
    const source = 'jsx-dom-runtime';

    if (isModule(path)) {
      let reference = get(pass, `imports/${importName}`);

      if (reference) {
        return t.cloneNode(reference);
      }

      reference = addNamed(path, importName, source, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      });

      set(pass, `imports/${importName}`, reference);

      return reference;
    }

    let reference = get(pass, `requires/${source}`);

    if (reference) {
      reference = t.cloneNode(reference);
    } else {
      reference = addNamespace(path, source, {
        importedInterop: 'uncompiled',
      });
      set(pass, `requires/${source}`, reference);
    }

    return t.memberExpression(reference, t.identifier(importName));
  };
}
