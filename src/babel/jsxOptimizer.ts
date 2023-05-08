import type { PluginObj } from '@babel/core';
import t from '@babel/types';

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

          if (t.isJSXElement(parent) || t.isJSXFragment(parent)) {
            const index = parent.children.findIndex((i) => {
              return t.isJSXElement(i) && i.openingElement === path.node;
            });

            if (index > -1) {
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
                    ? attr.value.expression
                    : attr.value || t.booleanLiteral(true),
                );
              });

              const children = t.react.buildChildren(path.container);

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

              parent.children[index] = t.jsxExpressionContainer(
                t.callExpression(
                  t.identifier(element.name),
                  [t.objectExpression(props)],
                ),
              );
            }
          }
        }
      },
    },
  };
};
