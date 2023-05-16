import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { boolAttrs, DOMEvents, htmlTags, svgTags } from './collections';
import { createImport } from './createImport';
import {
  buildChildren,
  buildProps,
  convertJSXIdentifier,
  getTag,
} from './util';

const ns = {
  name: '__ns',
} as const;

const addPureAnnotate = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const isFunctionComponent = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);

  // A-Z, $ or _
  return (charCode >= 65 && charCode <= 90) ||
    charCode === 36 ||
    charCode === 95;
};

export const jsxSyntax = (): PluginObj => {
  let nsSvg: WeakSet<t.Node>;
  let addImport: ReturnType<typeof createImport>;

  return {
    name: 'jsx-dom-runtime/babel-plugin-jsx-syntax',
    visitor: {
      Program: {
        enter(path) {
          nsSvg = new WeakSet();
          addImport = createImport(path);
        },
      },

      JSXFragment: {
        exit(path) {
          const children = buildChildren(path.node);

          const props = children.length > 0 ? [
            children.length === 1
              ? children[0]
              : t.arrayExpression(children)
          ] : [];

          const child = t.callExpression(
            addImport('Fragment'),
            props,
          );

          addPureAnnotate(child);
          path.replaceWith(t.inherits(child, path.node));
        },
      },

      JSXElement: {
        enter(path) {
          const { name } = path.node.openingElement;

          if (t.isJSXNamespacedName(name)) {
            return;
          }

          if (t.isJSXMemberExpression(name) || isFunctionComponent(name)) {
            const props = buildProps(path.node);
            const callExp = t.callExpression(
              convertJSXIdentifier(name),
              [t.objectExpression(props)],
            );

            const node = t.isJSXElement(path.parent) || t.isJSXFragment(path.parent)
              ? t.jsxExpressionContainer(callExp)
              : callExp;

            path.replaceWith(t.inherits(node, path.node));
          } else if (svgTags.has(name.name)) {
            nsSvg.add(path.node);
          }
        },

        exit(path) {
          const props = buildProps(path.node);

          const noNs = props.every((i) => {
            return !(t.isObjectProperty(i) && t.isIdentifier(i.key, ns));
          });

          if (noNs && nsSvg.has(path.node) || nsSvg.has(path.parent)) {
            props.push(
              t.objectProperty(
                t.identifier(ns.name),
                t.numericLiteral(1),
              ),
            );
          }

          const callExp = t.callExpression(
            addImport('jsx'),
            [getTag(path.node), t.objectExpression(props)],
          );

          addPureAnnotate(callExp);
          path.replaceWith(t.inherits(callExp, path.node));
        },
      },

      JSXAttribute(path) {
        const { parent } = path;

        if (!t.isJSXOpeningElement(parent) || !t.isJSXIdentifier(parent.name)) {
          return;
        }

        const tag = parent.name.name;

        if (!(htmlTags.has(tag) || svgTags.has(tag))) {
          return;
        }

        const attr = path.node.name;

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

          const attrName = attr.name.toLowerCase();

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
            return;
          }

          if (boolAttrs.has(attrName)) {
            path.node.value ??= t.stringLiteral('');
            return;
          }
        }

        if (
          tag === 'a' &&
          attr.name === 'xlinkHref' ||
          t.isJSXNamespacedName(attr) &&
          attr.name.name === 'href' &&
          attr.namespace.name === 'xlink'
        ) {
          path.replaceWith(
            t.jSXAttribute(
              t.jSXIdentifier('href'),
              path.node.value,
            ),
          );
        }
      },
    },
  };
};
