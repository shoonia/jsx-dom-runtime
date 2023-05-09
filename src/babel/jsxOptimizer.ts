import type { NodePath, PluginObj } from '@babel/core';
import t from '@babel/types';

const createCallExpression = (
  name: string,
  path: NodePath<t.JSXElement>,
): t.CallExpression => {
  const props = path.node.openingElement.attributes.map((attr) => {
    if (t.isJSXSpreadAttribute(attr)) {
      return t.spreadElement(attr.argument);
    }

    return t.objectProperty(
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

  if (t.isJSXElement(path.node)) {
    const children = t.react.buildChildren(path.node).map((child) => {
      return t.isJSXSpreadChild(child)
        ? child.expression
        : child;
    });

    if (children.length > 0) {
      props.push(
        t.objectProperty(
          t.identifier('children'),
          children.length === 1
            ? children[0]
            : t.arrayExpression(children),
        ),
      );
    }
  }

  return t.callExpression(
    t.identifier(name),
    [t.objectExpression(props)],
  );
};

export const jsxOptimizer = (): PluginObj => {
  return {
    name: 'babel-plugin-optimize-jsx-runtime',
    visitor: {
      JSXElement(path) {
        const { name } = path.node.openingElement;

        if (!t.isJSXIdentifier(name)) {
          return;
        }

        const charCode = name.name.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
          const callExp = createCallExpression(name.name, path);

          path.replaceWith(
            t.isJSXElement(path.parent) || t.isJSXFragment(path.parent)
              ? t.jsxExpressionContainer(callExp)
              : callExp,
          );
        }
      },
    },
  };
};
