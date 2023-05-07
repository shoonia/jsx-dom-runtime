export const jsxOptimizer = (babel) => {
  const { types: t } = babel;

  return {
    name: 'babel-plugin-optimize-jsx-runtime',
    visitor: {
      JSXOpeningElement(path) {
        const element = path.node.name;

        if (!t.isJSXIdentifier(element)) {
          return;
        }

        // TODO: handling `children` props
        if (path.container.children.length > 0) {
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
                  t.identifier(attr.name.name),
                  t.isJSXExpressionContainer(attr.value)
                    ? attr.value.expression
                    : attr.value || t.booleanLiteral(true),
                );
              });

              // TODO: handling `children` props
              // const children = path.container.children.reduce((acc, item) => {
              //   if (t.isJSXText(item)) {
              //     const text = item.value.trim();

              //     if (text !== '') {
              //       acc.push(t.stringLiteral(text));
              //     }
              //   } else if (t.isJSXExpressionContainer(item) || t.isJSXSpreadChild(item)) {
              //     const exp = item.expression;

              //     if (!t.isJSXEmptyExpression(exp)) {
              //       acc.push(exp);
              //     }
              //   } else {
              //     acc.push(item);
              //   }

              //   return acc;
              // }, []);

              // if (children.length > 0) {
              //   params.push(
              //     t.objectProperty(
              //       t.identifier('children'),
              //       children.length === 1
              //         ? children[0]
              //         : t.arrayExpression(children)
              //     )
              //   );
              // }

              parent.children[index] = t.jsxExpressionContainer(
                t.callExpression(
                  t.identifier(element.name),
                  [t.objectExpression(params)]
                ),
              );
            }
          }
        }
      }
    }
  };
};
