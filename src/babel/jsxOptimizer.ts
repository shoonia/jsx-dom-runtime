import t from '@babel/types';

export const jsxOptimizer = () => {
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
            const index = parent.children.findIndex((item) => {
              return item.openingElement === path.node;
            });

            if (index > -1) {
              const params = path.node.attributes.map((attr) => {
                return t.objectProperty(
                  t.identifier(
                    t.isJSXNamespacedName(attr.name)
                      ? attr.name.namespace.name + ':' + attr.name.name.name
                      : attr.name.name,
                  ),
                  t.isJSXExpressionContainer(attr.value)
                    ? attr.value.expression
                    : attr.value || t.booleanLiteral(true),
                );
              });

              const children = t.react.buildChildren(path.container);

              if (children.length > 0) {
                params.push(
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
                  [t.objectExpression(params)],
                ),
              );
            }
          }
        }
      },
    },
  };
};
