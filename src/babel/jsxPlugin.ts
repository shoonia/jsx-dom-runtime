import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { isHtmlTag, sureSvg, maybeSvg } from './tags/tags';
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
          sureSvg(node.name.name) ||
          maybeSvg(node.name.name) &&
          t.isJSXElement(path.parentPath.parent) &&
          path.parentPath.parent.openingElement.attributes.some((i) => {
            // @ts-expect-error
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

        const tag = parent.name.name;

        if (!(isHtmlTag(tag) || sureSvg(tag))) {
          return;
        }

        const attr = path.node.name;

        if (t.isJSXNamespacedName(attr)) {
          if (
            tag === 'a' &&
            attr.namespace.name === 'xlink' &&
            attr.name.name === 'href'
          ) {
            path.replaceWith(
              t.jSXAttribute(
                t.jSXIdentifier('href'),
                path.node.value,
              ),
            );
          }

          return;
        }

        if (t.isJSXIdentifier(attr)) {
          if (attr.name === 'className') {
            attr.name = 'class';
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

          const attrName = attr.name.toLowerCase();

          if (isDOMEvent(attrName)) {
            attr.name = attrName;
          }
        }
      },
    },
  };
};
