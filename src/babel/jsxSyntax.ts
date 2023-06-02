import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { createImport, type TImportName } from './createImport';
import {
  ariaAttributes,
  booleanAttributes,
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

const addPureAnnotate = <T extends t.Node>(node: T): T => {
  return t.addComment<T>(node, 'leading', '#__PURE__', false);
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
      Program(path) {
        nsMap = new WeakMap();
        addImport = createImport(path);
      },

      JSXFragment(path) {
        const children = buildChildren(path.node);

        path.replaceWith(
          addPureAnnotate(
            t.callExpression(
              addImport('Fragment'),
              children.length > 0 ? [
                children.length === 1
                  ? children[0]
                  : t.arrayExpression(children)
              ] : [],
            ),
          ),
        );
      },

      JSXElement: {
        enter(path) {
          const { name } = path.node.openingElement;

          if (t.isJSXNamespacedName(name, null)) {
            return;
          }

          if (t.isJSXMemberExpression(name, null) || isFunctionComponent(name)) {
            path.replaceWith(
              t.callExpression(
                convertJSXIdentifier(name),
                [buildProps(path.node)],
              ),
            );
          } else if (svgTags.has(name.name)) {
            nsMap.set(path.node, 'svgNS');
          } else if (mathmlTags.has(name.name)) {
            nsMap.set(path.node, 'mathmlNS');
          }
        },

        exit(path) {
          const props = buildProps(path.node);

          const noNs = props.properties.every((i) => {
            return !(t.isObjectProperty(i, null) && t.isIdentifier(i.key, ns));
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

          path.replaceWith(
            addPureAnnotate(
              t.callExpression(
                addImport('jsx'),
                [getTag(path.node), props],
              ),
            ),
          );
        },
      },

      JSXAttribute(path) {
        const { parent } = path;

        if (!t.isJSXOpeningElement(parent, null) || !t.isJSXIdentifier(parent.name, null)) {
          return;
        }

        const tag = parent.name.name;

        if (!(htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag))) {
          return;
        }

        const attr = path.node.name;

        if (t.isJSXIdentifier(attr, null)) {
          if (htmlDOMAttributes.has(attr.name)) {
            attr.name = htmlDOMAttributes.get(attr.name);
            return;
          }

          if (
            ariaAttributes.has(attr.name) ||
            attr.name.startsWith('data-')
          ) {
            const val = path.node.value;

            if (val === null) {
              path.node.value = t.stringLiteral('true');
              return;
            }

            if (
              t.isJSXExpressionContainer(val, null) &&
              t.isBooleanLiteral(val.expression, null)
            ) {
              path.node.value = t.stringLiteral(String(val.expression.value));
            }

            return;
          }

          const attrName = attr.name.toLowerCase();

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
            return;
          }

          if (booleanAttributes.has(attrName)) {
            attr.name = attrName;
            path.node.value ??= t.stringLiteral('');
            return;
          }
        }

        const isNamespacedName = t.isJSXNamespacedName(attr, null);

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
