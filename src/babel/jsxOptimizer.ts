import type { NodePath, PluginObj } from '@babel/core';
import t from '@babel/types';

const createCallExpression = (
  name: string,
  path: NodePath<t.JSXOpeningElement>,
): t.CallExpression => {
  const props = path.node.attributes.map((attr) => {
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

  if (t.isJSXElement(path.container)) {
    const children = t.react.buildChildren(path.container).map((child) => {
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
      JSXOpeningElement(path) {
        const node = path.parentPath.parent;
        const element = path.node.name;

        if (
          !t.isJSXIdentifier(element) ||
          t.isCallExpression(node) || // FIXME:
          t.isForOfStatement(node) || // TODO: Add tests before remove
          t.isForInStatement(node) || // TODO: Add tests before remove
          t.isYieldExpression(node) || // TODO: Add tests before remove
          t.isSwitchCase(node) // TODO: Add tests before remove
        ) {
          return;
        }

        const charCode = element.name.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
          if (t.isJSXElement(node) || t.isJSXFragment(node)) {
            const index = node.children.indexOf(path.parent as any);

            node.children[index] = t.jsxExpressionContainer(
              createCallExpression(element.name, path),
            );

            return;
          }

          path.parentPath.replaceWith(
            createCallExpression(element.name, path),
          );
        }
      },
    },
  };
};
