import { svg } from './tags/svg';
import { html } from './tags/html';

const svgTags = new Set(svg);
const htmlTags = new Set(html);

export const jsxPlugin = (babel) => {
  const { types: t } = babel;

  const svgNsAttribute = () => {
    return t.jSXAttribute(
      t.jSXIdentifier('__ns'),
      t.JSXExpressionContainer(t.numericLiteral(1))
    );
  };

  return {
    visitor: {
      JSXOpeningElement(path) {
        if (svgTags.has(path.node.name.name)) {
          path.node.attributes.push(svgNsAttribute());
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;

        if (htmlTags.has(path.parent.name.name)) {
          const name = attr.name.toLowerCase();

          switch (name) {
            case 'classname': {
              attr.name = 'class';
              return;
            }
            case 'htmlfor': {
              attr.name = 'for';
              return;
            }
          }

          if (attr.name.startsWith('on')) {
            attr.name = name;
            return;
          }
        }
      }
    }
  };
};
