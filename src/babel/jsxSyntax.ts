import type { PluginObj, PluginPass, NodePath } from '@babel/core';
import jsx from '@babel/plugin-syntax-jsx';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

import {
  buildChildren,
  buildChildrenProperty,
  convertJSXIdentifier,
} from './util';

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

export const jsxSyntax = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/jsx-syntax',
    inherits: jsx.default || jsx,
    visitor: {
      Program: {
        enter(path, state) {
          set(state, 'id/jsx', createImportLazily(state, path, 'jsx'));
          set(state, 'id/fragment', createImportLazily(state, path, 'Fragment'));
        },
      },

      JSXFragment: {
        exit(path, file) {
          const children = buildChildren(path.node);

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
          const openingPath = path.get('openingElement');
          const attribsArray = openingPath.get('attributes');
          const children = buildChildren(path.node);

          const attribs = attribsArray.length || children.length
            ? buildJSXOpeningElementAttributes(attribsArray, children)
            : t.objectExpression([]);

          const node = t.callExpression(
            get(file, 'id/jsx')(),
            [getTag(openingPath), attribs],
          );

          annotateAsPure(node);
          path.replaceWith(t.inherits(node, path.node));
        },
      },

      JSXAttribute(path) {
        if (t.isJSXElement(path.node.value)) {
          path.node.value = t.jsxExpressionContainer(path.node.value);
        }
      },
    },
  };

  function accumulateAttribute(
    array: t.ObjectExpression['properties'],
    attr: NodePath<t.JSXAttribute | t.JSXSpreadAttribute>,
  ) {
    if (t.isJSXSpreadAttribute(attr.node)) {
      const arg = attr.node.argument;
      // Collect properties into props array if spreading object expression
      if (t.isObjectExpression(arg) && !hasProto(arg)) {
        Array.prototype.push.apply(array, arg.properties);
      } else {
        array.push(t.spreadElement(arg));
      }
      return array;
    }

    const value = t.isJSXExpressionContainer(attr.node.value)
      ? attr.node.value.expression
      : attr.node.value || t.booleanLiteral(true);

    if (t.isStringLiteral(value)) {
      value.value = value.value.replace(/\n\s+/g, ' ');
    }

    if (t.isJSXNamespacedName(attr.node.name)) {
      // @ts-expect-error mutating AST
      attr.node.name = t.stringLiteral(
        attr.node.name.namespace.name + ':' + attr.node.name.name.name,
      );
    } else if (t.isValidIdentifier(attr.node.name.name, false)) {
      // @ts-expect-error mutating AST
      attr.node.name.type = 'Identifier';
    } else {
      // @ts-expect-error mutating AST
      attr.node.name = t.stringLiteral(attr.node.name.name);
    }

    array.push(
      t.inherits(
        t.objectProperty(
          // @ts-expect-error The attribute.node.name is an Identifier now
          attr.node.name,
          value,
        ),
        attr.node,
      ),
    );

    return array;
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
