import { isSvgElement, svgTags } from './tags/svg';
import { htmlTags } from './tags/html';
import { DOMEvents } from './tags/dom';

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
        if (isSvgElement(path)) {
          path.node.attributes.push(createNsAttribute(1));
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;
        const tag = path.parent.name.name;

        if (!t.isJSXIdentifier(attr)) {
          return;
        }

        if (
          attr.name === 'className' &&
          (htmlTags.has(tag) || svgTags.has(tag))
        ) {
          attr.name = 'class';
          return;
        }

        if (htmlTags.has(tag)) {
          if (
            attr.name === 'htmlFor' &&
            (tag === 'label' || tag === 'output')
          ) {
            attr.name = 'for';
            return;
          }

          const attrName = attr.name.toLowerCase();

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
            return;
          }

          return;
        }
      }
    }
  };
};
