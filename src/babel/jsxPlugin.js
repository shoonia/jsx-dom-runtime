import { svg } from './tags/svg';
import { events, html } from './tags/html';

const svgTags = new Set(svg);
const htmlTags = new Set(html);
const DOMEvents = new Set(events);

export const jsxPlugin = (babel) => {
  const { types: t } = babel;

  const createNsAttribute = (val) => {
    return t.jSXAttribute(
      t.jSXIdentifier('__ns'),
      t.JSXExpressionContainer(t.numericLiteral(val))
    );
  };

  return {
    visitor: {
      JSXOpeningElement(path) {
        if (svgTags.has(path.node.name.name)) {
          path.node.attributes.push(createNsAttribute(1));
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;
        const tag = path.parent.name.name;

        if (t.isJSXIdentifier(attr) && htmlTags.has(tag)) {
          switch (attr.name) {
            case 'className': {
              attr.name = 'class';
              return;
            }

            case 'htmlFor': {
              if (tag === 'label' || tag === 'output') {
                attr.name = 'for';
              }
              return;
            }
          }

          const attrName = attr.name.toLowerCase();

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
            return;
          }
        }
      }
    }
  };
};
