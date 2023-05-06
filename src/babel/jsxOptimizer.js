export const jsxOptimizer = (babel) => {
  const { types: t } = babel;

  return {
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
            const start = element.loc.start.index;
            const end = element.loc.end.index;

            const index = parent.children.findIndex((item) => {
              return (
                t.isJSXElement(item) &&
                t.isJSXOpeningElement(item.openingElement) &&
                item.openingElement.name.loc.start.index === start &&
                item.openingElement.name.loc.end.index === end
              );
            });

            if (index > -1) {
              const params = path.node.attributes.map((attr) => {
                const value = t.isJSXExpressionContainer(attr.value)
                  ? attr.value.expression
                  : attr.value;

                return t.objectProperty(t.identifier(attr.name.name), value);
              });

              const children = path.container.children.reduce((acc, item) => {
                if (t.isJSXText(item)) {
                  const text = item.value.trim();

                  if (text !== '') {
                    acc.push(t.stringLiteral(text));
                  }
                } else if (t.isJSXExpressionContainer(item) || t.isJSXSpreadChild(item)) {
                  const exp = item.expression;

                  if (!t.isJSXEmptyExpression(exp)) {
                    acc.push(exp);
                  }
                } else {
                  acc.push(item);
                }

                return acc;
              }, []);

              params.push(
                t.objectProperty(t.identifier('children'), t.arrayExpression(children)),
              );

              parent.children[index] = t.jsxExpressionContainer(
                t.callExpression(t.identifier(element.name), [t.objectExpression(params)])
              );
            }
          }
        }
      }
    }
  };
};
