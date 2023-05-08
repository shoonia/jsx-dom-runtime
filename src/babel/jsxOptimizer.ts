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
        const element = path.node.name;

        if (!t.isJSXIdentifier(element)) {
          return;
        }

        const charCode = element.name.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
          const { parent } = path.parentPath;

          const isJsx = t.isJSXElement(parent) || t.isJSXFragment(parent);

          if (isJsx || t.isArrayExpression(parent)) {
            const list = isJsx
              ? parent.children
              : parent.elements;

            const index = list.findIndex((i) => {
              return t.isJSXElement(i) && i.openingElement === path.node;
            });

            if (index > -1) {
              const expression = createCallExpression(element.name, path);

              list[index] = isJsx
                ? t.jsxExpressionContainer(expression)
                : expression;
            }

            return;
          }

          if (t.isArrowFunctionExpression(parent)) {
            parent.body = createCallExpression(element.name, path);

            return;
          }

          if (t.isReturnStatement(parent)) {
            parent.argument = createCallExpression(element.name, path);

            return;
          }

          if (t.isConditionalExpression(parent)) {
            if (parent.consequent === path.parent) {
              parent.consequent = createCallExpression(element.name, path);
            } else if (parent.alternate === path.parent) {
              parent.alternate = createCallExpression(element.name, path);
            } else if (parent.test === path.parent) {
              parent.test = createCallExpression(element.name, path);
            }

            return;
          }

          if (t.isVariableDeclarator(parent)) {
            parent.init = createCallExpression(element.name, path);

            return;
          }

          if (t.isAssignmentExpression(parent)) {
            if (parent.right === path.parent) {
              parent.right = createCallExpression(element.name, path);
            }

            return;
          }

          // TODO: ObjectProperty
          // TODO: ExpressionStatement
          // TODO: BinaryExpression
          // TODO: UnaryExpression
          // TODO: SequenceExpression
          // TODO: CallExpression
          // TODO: IfStatement
          // TODO: WhileStatement
          // TODO: SwitchStatement
          // TODO: ForOfStatement
          // TODO: ForInStatement
          // TODO: YieldExpression
        }
      },
    },
  };
};
