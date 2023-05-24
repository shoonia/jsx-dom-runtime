import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { createImport, type TImportName } from './createImport';
import {
  boolAttrs,
  DOMEvents,
  htmlTags,
  mathmlTags,
  htmlDOMAttributes,
  svgDOMAttributes,
  svgTags,
} from './collections';
import {
  buildChildren,
  buildProps,
  convertJSXIdentifier,
  getTag,
} from './util';

const ns = t.identifier('ns');

const addPureAnnotate = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const isFunctionComponent = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);

  // [A-Z], [$] or [_]
  return (charCode >= 65 && charCode <= 90) ||
    charCode === 36 ||
    charCode === 95;
};

export const jsxSyntax = (): PluginObj => {
  let nsMap: WeakMap<t.Node, TImportName>;
  let addImport: ReturnType<typeof createImport>;

  return {
    name: 'jsx-dom-runtime/babel-plugin-jsx-syntax',
    visitor: {
      Program: {
        enter(path) {
          nsMap = new WeakMap();
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

          const callExp = t.callExpression(
            addImport('Fragment'),
            props,
          );

          addPureAnnotate(callExp);
          path.replaceWith(callExp);
        },
      },

      JSXElement: {
        enter(path) {
          const { name } = path.node.openingElement;

          if (t.isJSXNamespacedName(name)) {
            return;
          }

          if (t.isJSXMemberExpression(name) || isFunctionComponent(name)) {
            const callExp = t.callExpression(
              convertJSXIdentifier(name),
              [buildProps(path.node)],
            );

            const node = t.isJSXElement(path.parent) || t.isJSXFragment(path.parent)
              ? t.jsxExpressionContainer(callExp)
              : callExp;

            path.replaceWith(node);
          } else if (svgTags.has(name.name)) {
            nsMap.set(path.node, 'svgNS');
          } else if (mathmlTags.has(name.name)) {
            nsMap.set(path.node, 'mathmlNS');
          }
        },

        exit(path) {
          const props = buildProps(path.node);

          const noNs = props.properties.every((i) => {
            return !(t.isObjectProperty(i) && t.isIdentifier(i.key, ns));
          });

          if (noNs) {
            const importName = nsMap.get(path.node) ?? nsMap.get(path.parent);

            if (importName) {
              props.properties.push(
                t.objectProperty(
                  ns,
                  addImport(importName),
                ),
              );
            }
          }

          const callExp = t.callExpression(
            addImport('jsx'),
            [getTag(path.node), props],
          );

          addPureAnnotate(callExp);
          path.replaceWith(callExp);
        },
      },

      JSXAttribute(path) {
        const { parent } = path;

        if (!t.isJSXOpeningElement(parent) || !t.isJSXIdentifier(parent.name)) {
          return;
        }

        const tag = parent.name.name;

        if (!(htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag))) {
          return;
        }

        const attr = path.node.name;

        if (t.isJSXIdentifier(attr)) {
          if (htmlDOMAttributes.has(attr.name)) {
            attr.name = htmlDOMAttributes.get(attr.name);
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

        const isNamespacedName = t.isJSXNamespacedName(attr);

        if (
          tag === 'a' &&
          attr.name === 'xlinkHref' ||
          isNamespacedName &&
          attr.name.name === 'href' &&
          attr.namespace.name === 'xlink'
        ) {
          path.node.name = t.jSXIdentifier('href');
          return;
        }

        if (
          !isNamespacedName &&
          svgDOMAttributes.has(attr.name) &&
          svgTags.has(tag)
        ) {
          attr.name = svgDOMAttributes.get(attr.name);
        }
      },
    },
  };
};
