import { isSvgTag, maybeSvg } from './tags/svg';
import { isHtmlTag } from './tags/html';
import { isDOMEvent } from './tags/dom';

export const jsxPlugin = (api) => {
  const { types: t } = api;

  const isSvgElement = (path) => {
    return isSvgTag(path.node.name.name) ||
      maybeSvg(path.node.name.name) &&
      path.parentPath.parent.openingElement?.attributes.some(
        (a) => a.name.name === '__ns' && a.value.expression?.value === 1
      );
  };

  const xlinkHref = (attrs) => {
    return attrs.findIndex((attr) => {
      return t.isJSXNamespacedName(attr.name) &&
        attr.name.namespace.name === 'xlink' &&
        attr.name.name.name === 'href';
    });
  };

  return {
    visitor: {
      JSXOpeningElement(path) {
        if (!isSvgElement(path)) {
          return;
        }

        const attrs = path.node.attributes;
        const index = xlinkHref(attrs);

        if (index > -1) {
          const attr = attrs.splice(index, 1)[0];

          attrs.splice(index, 0,
            t.jSXAttribute(
              t.jSXIdentifier('href'),
              attr.value
            ));
        }

        if (attrs.every((a) => a.name.name !== '__ns')) {
          attrs.push(
            t.jSXAttribute(
              t.jSXIdentifier('__ns'),
              t.JSXExpressionContainer(t.numericLiteral(1)),
            ));
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;
        const tag = path.parent.name.name;

        if (!t.isJSXIdentifier(attr)) {
          return;
        }

        if (attr.name === 'className') {
          if (isHtmlTag(tag) || isSvgTag(tag)) {
            attr.name = 'class';
          }
          return;
        }

        if (attr.name === 'htmlFor') {
          if (tag === 'label' || tag === 'output') {
            attr.name = 'for';
          }
          return;
        }

        if (isHtmlTag(tag)) {
          const attrName = attr.name.toLowerCase();

          if (isDOMEvent(attrName)) {
            attr.name = attrName;
          }
          return;
        }
      }
    }
  };
};
