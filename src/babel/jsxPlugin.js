import { isSvgTag, maybeSvg } from './tags/svg';
import { isHtmlTag } from './tags/html';
import { isBoolAttribute, isDOMEvent } from './tags/dom';

export const jsxPlugin = ({ types: t }) => {
  return {
    name: 'jsx-dom-runtime/babel-plugin',
    visitor: {
      JSXOpeningElement(path) {
        const node = path.node;

        if (
          isSvgTag(node.name.name) ||
          maybeSvg(node.name.name) &&
          path.parentPath.parent.openingElement?.attributes.some(
            (i) => i.name.name === '__ns' && i.value.expression?.value === 1
          )
        ) {
          if (node.attributes.every((i) => i.name.name !== '__ns')) {
            node.attributes.push(
              t.jSXAttribute(
                t.jSXIdentifier('__ns'),
                t.jSXExpressionContainer(t.numericLiteral(1)),
              ),
            );
          }
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;
        const tag = path.parent.name.name;

        if (t.isJSXNamespacedName(attr)) {
          if (
            attr.namespace.name === 'xlink' &&
            attr.name.name === 'href'
          ) {
            const attrs = path.parent.attributes;
            const index = attrs.findIndex((i) => i === path.node);

            if (index > -1) {
              const attr = attrs[index];

              attrs[index] = t.jSXAttribute(
                t.jSXIdentifier('href'),
                attr.value
              );
            }
          }

          return;
        }

        if (t.isJSXIdentifier(attr)) {
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

          if (isBoolAttribute(attr.name) && path.node.value === null) {
            path.node.value = t.stringLiteral('');
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
      },
    },
  };
};
