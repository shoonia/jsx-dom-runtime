import type { NodePath, Scope, Visitor } from '@babel/traverse';
import { template, type PluginPass  } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
// import annotateAsPure from '@babel/helper-annotate-as-pure';
import t from '@babel/types';
import type {
  CallExpression,
  Class,
  Expression,
  Identifier,
  JSXAttribute,
  JSXElement,
  JSXFragment,
  JSXOpeningElement,
  JSXSpreadAttribute,
  MemberExpression,
  ObjectExpression,
  Program,
} from '@babel/types';

const DEFAULT = {
  importSource: 'react',
  runtime: 'automatic',
  pragma: 'React.createElement',
  pragmaFrag: 'React.Fragment',
};

const JSX_SOURCE_ANNOTATION_REGEX =
  /^\s*\*?\s*@jsxImportSource\s+([^\s]+)\s*$/m;
const JSX_RUNTIME_ANNOTATION_REGEX = /^\s*\*?\s*@jsxRuntime\s+([^\s]+)\s*$/m;

const JSX_ANNOTATION_REGEX = /^\s*\*?\s*@jsx\s+([^\s]+)\s*$/m;
const JSX_FRAG_ANNOTATION_REGEX = /^\s*\*?\s*@jsxFrag\s+([^\s]+)\s*$/m;

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

export interface Options {
  importSource?: string;
  pragma?: string;
  pragmaFrag?: string;
  pure?: string;
  runtime?: 'automatic' | 'classic';
  throwIfNamespace?: boolean;
  useBuiltIns: boolean;
  useSpread?: boolean;
}
export const jsxSyntax = ({
  name,
  development,
}: {
  name: string;
  development: boolean;
}) => {
  return (_, options: Options) => {
    const {
      // pure: PURE_ANNOTATION = '#__PURE__', // FIXME:
      throwIfNamespace = false,
      runtime: RUNTIME_DEFAULT =  'automatic',
      importSource: IMPORT_SOURCE_DEFAULT = 'jsx-dom-runtime',
    } = options;

    const injectMetaPropertiesVisitor: Visitor<PluginPass> = {
      JSXOpeningElement(path, state) {
        const attributes = [];
        if (isThisAllowed(path.scope)) {
          attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('__self'),
              t.jsxExpressionContainer(t.thisExpression()),
            ),
          );
        }
        attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier('__source'),
            t.jsxExpressionContainer(makeSource(path, state)),
          ),
        );
        path.pushContainer('attributes', attributes);
      },
    };

    return {
      name,
      // inherits: jsx,
      visitor: {
        JSXNamespacedName(path) {
          if (throwIfNamespace) {
            throw path.buildCodeFrameError(
              'Namespace tags are not supported by default. React\'s JSX doesn\'t support namespace tags. \
You can set `throwIfNamespace: false` to bypass this warning.',
            );
          }
        },

        JSXSpreadChild(path) {
          throw path.buildCodeFrameError(
            'Spread children are not supported in React.',
          );
        },

        Program: {
          enter(path, state) {
            const { file } = state;
            let runtime: string = RUNTIME_DEFAULT;

            let source: string = IMPORT_SOURCE_DEFAULT;
            let pragmaSet = !!options.pragma;
            let pragmaFragSet = !!options.pragmaFrag;

            if (file.ast.comments) {
              for (const comment of file.ast.comments) {
                const sourceMatches = JSX_SOURCE_ANNOTATION_REGEX.exec(
                  comment.value,
                );
                if (sourceMatches) {
                  source = sourceMatches[1];
                }

                const runtimeMatches = JSX_RUNTIME_ANNOTATION_REGEX.exec(
                  comment.value,
                );
                if (runtimeMatches) {
                  runtime = runtimeMatches[1];
                }

                const jsxMatches = JSX_ANNOTATION_REGEX.exec(comment.value);
                if (jsxMatches) {
                  pragmaSet = true;
                }
                const jsxFragMatches = JSX_FRAG_ANNOTATION_REGEX.exec(
                  comment.value,
                );
                if (jsxFragMatches) {
                  pragmaFragSet = true;
                }
              }
            }

            set(state, 'runtime', runtime);
            if (pragmaSet || pragmaFragSet) {
              throw path.buildCodeFrameError(
                'pragma and pragmaFrag cannot be set when runtime is automatic.',
              );
            }

            const define = (name: string, id: string) =>
              set(state, name, createImportLazily(state, path, id, source));

            define('id/jsx', development ? 'jsxDEV' : 'jsx');
            define('id/jsxs', development ? 'jsxDEV' : 'jsxs');
            define('id/createElement', 'createElement');
            define('id/fragment', 'Fragment');

            set(state, 'defaultPure', source === DEFAULT.importSource);

            if (development) {
              path.traverse(injectMetaPropertiesVisitor, state);
            }
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
            let callExpr;
            if (
              get(file, 'runtime') === 'classic' ||
              shouldUseCreateElement(path)
            ) {
              callExpr = buildCreateElementCall(path, file);
            } else {
              callExpr = buildJSXElementCall(path, file);
            }

            path.replaceWith(t.inherits(callExpr, path.node));
          },
        },

        JSXAttribute(path) {
          if (t.isJSXElement(path.node.value)) {
            path.node.value = t.jsxExpressionContainer(path.node.value);
          }
        },
      },
    };

    // Returns whether the class has specified a superclass.
    function isDerivedClass(classPath: NodePath<Class>) {
      return classPath.node.superClass !== null;
    }

    // Returns whether `this` is allowed at given scope.
    function isThisAllowed(scope: Scope) {
      // This specifically skips arrow functions as they do not rewrite `this`.
      do {
        const { path } = scope;
        if (path.isFunctionParent() && !path.isArrowFunctionExpression()) {
          if (!path.isMethod()) {
            // If the closest parent is a regular function, `this` will be rebound, therefore it is fine to use `this`.
            return true;
          }
          // Current node is within a method, so we need to check if the method is a constructor.
          if (path.node.kind !== 'constructor') {
            // We are not in a constructor, therefore it is always fine to use `this`.
            return true;
          }
          // Now we are in a constructor. If it is a derived class, we do not reference `this`.
          return !isDerivedClass(path.parentPath.parentPath as NodePath<Class>);
        }
        if (path.isTSModuleBlock()) {
          // If the closest parent is a TS Module block, `this` will not be allowed.
          return false;
        }
      } while ((scope = scope.parent));
      // We are not in a method or function. It is fine to use `this`.
      return true;
    }

    function call(
      pass: PluginPass,
      name: string,
      args: CallExpression['arguments'],
    ) {
      const node = t.callExpression(get(pass, `id/${name}`)(), args);
      // FIXME:
      // if (PURE_ANNOTATION ?? get(pass, 'defaultPure')) annotateAsPure(node);
      return node;
    }

    // We want to use React.createElement, even in the case of
    // jsx, for <div {...props} key={key} /> to distinguish it
    // from <div key={key} {...props} />. This is an intermediary
    // step while we deprecate key spread from props. Afterwards,
    // we will stop using createElement in the transform.
    function shouldUseCreateElement(path: NodePath<JSXElement>) {
      const openingPath = path.get('openingElement');
      const attributes = openingPath.node.attributes;

      let seenPropsSpread = false;
      for (let i = 0; i < attributes.length; i++) {
        const attr = attributes[i];
        if (
          seenPropsSpread &&
          t.isJSXAttribute(attr) &&
          attr.name.name === 'key'
        ) {
          return true;
        } else if (t.isJSXSpreadAttribute(attr)) {
          seenPropsSpread = true;
        }
      }
      return false;
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
      array: ObjectExpression['properties'],
      attribute: NodePath<JSXAttribute | JSXSpreadAttribute>,
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

    function buildChildrenProperty(children: Expression[]) {
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
    function buildJSXElementCall(path: NodePath<JSXElement>, file: PluginPass) {
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

      if (development) {
        // isStaticChildren, __source, and __self are only used in development
        // automatically include __source and __self in this plugin
        // so we can eliminate the need for separate Babel plugins in Babel 8
        args.push(
          extracted.key ?? path.scope.buildUndefinedNode(),
          t.booleanLiteral(children.length > 1),
        );
        if (extracted.__source) {
          args.push(extracted.__source);
          if (extracted.__self) args.push(extracted.__self);
        } else if (extracted.__self) {
          args.push(path.scope.buildUndefinedNode(), extracted.__self);
        }
      } else if (extracted.key !== undefined) {
        args.push(extracted.key);
      }

      return call(file, children.length > 1 ? 'jsxs' : 'jsx', args);
    }

    // Builds props for React.jsx. This function adds children into the props
    // and ensures that props is always an object
    function buildJSXOpeningElementAttributes(
      attribs: NodePath<JSXAttribute | JSXSpreadAttribute>[],
      children: Expression[],
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
      path: NodePath<JSXFragment>,
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

      if (development) {
        args.push(
          path.scope.buildUndefinedNode(),
          t.booleanLiteral(children.length > 1),
        );
      }

      return call(file, children.length > 1 ? 'jsxs' : 'jsx', args);
    }

    // Builds JSX into:
    // Production: React.createElement(type, arguments, children)
    // Development: React.createElement(type, arguments, children, source, self)
    function buildCreateElementCall(
      path: NodePath<JSXElement>,
      file: PluginPass,
    ) {
      const openingPath = path.get('openingElement');

      return call(file, 'createElement', [
        getTag(openingPath),
        buildCreateElementOpeningElementAttributes(
          file,
          path,
          openingPath.get('attributes'),
        ),
        // @ts-expect-error JSXSpreadChild has been transformed in convertAttributeValue
        ...t.react.buildChildren(path.node),
      ]);
    }

    function getTag(openingPath: NodePath<JSXOpeningElement>) {
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

    /**
     * The logic for this is quite terse. It's because we need to
     * support spread elements. We loop over all attributes,
     * breaking on spreads, we then push a new object containing
     * all prior attributes to an array for later processing.
     */
    function buildCreateElementOpeningElementAttributes(
      file: PluginPass,
      path: NodePath<JSXElement>,
      attribs: NodePath<JSXAttribute | JSXSpreadAttribute>[],
    ) {
      const props: ObjectExpression['properties'] = [];
      const found = Object.create(null);

      for (const attr of attribs) {
        const name =
          t.isJSXAttribute(attr) &&
          t.isJSXIdentifier(attr.name) &&
          attr.name.name;

        if ((name === '__source' || name === '__self')) {
          if (found[name]) throw sourceSelfError(path, name);
          found[name] = true;
        }

        accumulateAttribute(props, attr);
      }

      return props.length === 1 &&
        t.isSpreadElement(props[0]) &&
        // If an object expression is spread element's argument
        // it is very likely to contain __proto__ and we should stop
        // optimizing spread element
        !t.isObjectExpression(props[0].argument)
        ? props[0].argument
        : props.length > 0
          ? t.objectExpression(props)
          : t.nullLiteral();
    }
  };

  function getSource(source: string, importName: string) {
    switch (importName) {
      case 'Fragment':
        return `${source}/${development ? 'jsx-dev-runtime' : 'jsx-runtime'}`;
      case 'jsxDEV':
        return `${source}/jsx-dev-runtime`;
      case 'jsx':
      case 'jsxs':
        return `${source}/jsx-runtime`;
      case 'createElement':
        return source;
    }
  }

  function createImportLazily(
    pass: PluginPass,
    path: NodePath<Program>,
    importName: string,
    source: string,
  ): () => Identifier | MemberExpression {
    return () => {
      const actualSource = getSource(source, importName);
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
};

function makeSource(path: NodePath, state: PluginPass) {
  const location = path.node.loc;
  if (!location) {
    // the element was generated and doesn't have location information
    return path.scope.buildUndefinedNode();
  }

  // @ts-expect-error todo: avoid mutating PluginPass
  if (!state.fileNameIdentifier) {
    const { filename = '' } = state;

    const fileNameIdentifier = path.scope.generateUidIdentifier('_jsxFileName');
    path.scope.getProgramParent().push({
      id: fileNameIdentifier,
      init: t.stringLiteral(filename),
    });
    // @ts-expect-error todo: avoid mutating PluginPass
    state.fileNameIdentifier = fileNameIdentifier;
  }

  return makeTrace(
    t.cloneNode(
      // @ts-expect-error todo: avoid mutating PluginPass
      state.fileNameIdentifier,
    ),
    location.start.line,
    location.start.column,
  );
}

function makeTrace(
  fileNameIdentifier: Identifier,
  lineNumber?: number,
  column0Based?: number,
) {
  const fileLineLiteral =
    lineNumber != null ? t.numericLiteral(lineNumber) : t.nullLiteral();

  const fileColumnLiteral =
    column0Based != null ? t.numericLiteral(column0Based + 1) : t.nullLiteral();

  return template.expression.ast`{
    fileName: ${fileNameIdentifier},
    lineNumber: ${fileLineLiteral},
    columnNumber: ${fileColumnLiteral},
  }`;
}

function sourceSelfError(path: NodePath, name: string) {
  const pluginName = `transform-react-jsx-${name.slice(2)}`;

  return path.buildCodeFrameError(
    `Duplicate ${name} prop found. You are most likely using the deprecated ${pluginName} Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config.`,
  );
}
