import type { PluginObj } from '@babel/core';
import t, { type JSXAttribute } from '@babel/types';

import { isSvgTag, maybeSvg } from './tags/svg';
import { isHtmlTag } from './tags/html';
import { isBoolAttribute, isDOMEvent } from './tags/dom';

export const jsxPlugin = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/babel-plugin',
    visitor: {
      JSXOpeningElement(path) {
        const node = path.node;

        if (!t.isJSXIdentifier(node.name)) {
          return;
        }

        if (
          isSvgTag(node.name.name) ||
          maybeSvg(node.name.name) &&
          t.isJSXElement(path.parentPath.parent) &&
          path.parentPath.parent.openingElement.attributes.some((i) => {
            return t.isJSXAttribute(i) && i.name.name === '__ns' && i.value.expression?.value === 1;
          })
        ) {
          const noNs = node.attributes.every((i) => {
            return !t.isJSXAttribute(i) || i.name.name !== '__ns';
          });

          if (noNs) {
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
        const { parent } = path;

        if (!t.isJSXOpeningElement(parent) || !t.isJSXIdentifier(parent.name)) {
          return;
        }

        const attr = path.node.name;
        const tag = parent.name.name;

        if (t.isJSXNamespacedName(attr)) {
          if (
            attr.namespace.name === 'xlink' &&
            attr.name.name === 'href'
          ) {
            const attrs = parent.attributes;
            const index = attrs.findIndex((i) => i === path.node);

            if (index > -1) {
              const attr = attrs[index] as JSXAttribute;

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
