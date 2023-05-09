import type { NodePath, PluginObj } from '@babel/core';
import t from '@babel/types';

import { buildChildrenProperty, convertJSXIdentifier } from './util';

const createCallExpression = (path: NodePath<t.JSXElement>): t.CallExpression => {
  const props = path.node.openingElement.attributes.map((attr) => {
    return t.isJSXSpreadAttribute(attr)
      ? t.spreadElement(attr.argument)
      : t.objectProperty(
        t.identifier(
          t.isJSXNamespacedName(attr.name)
            ? JSON.stringify(attr.name.namespace.name + ':' + attr.name.name.name)
            : t.isValidIdentifier(attr.name.name)
              ? attr.name.name
              : JSON.stringify(attr.name.name),
        ),
        t.isJSXExpressionContainer(attr.value)
          ? t.isJSXEmptyExpression(attr.value.expression)
            ? t.nullLiteral()
            : attr.value.expression
          : attr.value || t.booleanLiteral(true),
      );
  });

  const children = t.react.buildChildren(path.node).map((child) => {
    return t.isJSXSpreadChild(child)
      ? child.expression
      : child;
  });

  if (children.length > 0) {
    props.push(buildChildrenProperty(children));
  }

  return t.callExpression(
    convertJSXIdentifier(
      path.node.openingElement.name,
      path.node.openingElement
    ),
    [t.objectExpression(props)],
  );
};

const isCapitalLetter = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
};

export const jsxOptimizer = (): PluginObj => {
  return {
    name: 'babel-plugin-optimize-jsx-runtime',
    visitor: {
      JSXElement(path) {
        const { name } = path.node.openingElement;

        if (t.isJSXNamespacedName(name)) {
          return;
        }

        if (t.isJSXMemberExpression(name) || isCapitalLetter(name)) {
          const callExp = createCallExpression(path);

          const node = t.isJSXElement(path.parent) || t.isJSXFragment(path.parent)
            ? t.jsxExpressionContainer(callExp)
            : callExp;

          path.replaceWith(t.inherits(node, path.node));
        }
      },
    },
  };
};
