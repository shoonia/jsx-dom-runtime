import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { createImport, type TImportName } from './createImport';
import { $children, $identifier, $objectProperty, $stringLiteral } from './builders';
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

const opts = { name: 'ns' } as const;

const pureAnnotation = (): t.CommentBlock[] => [
  {
    type: 'CommentBlock',
    value: '#__PURE__',
  },
];

const isFunctionComponent = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);

  // [A-Z], [$] or [_]
  return (charCode >= 65 && charCode <= 90) ||
    charCode === 36 ||
    charCode === 95;
};

export const jsxTransform = (): PluginObj => {
  let nsMap: WeakMap<t.Node, TImportName>;
  let addImport: ReturnType<typeof createImport>;

  return {
    name: 'jsx-dom-runtime/babel-plugin-transform-jsx',
    visitor: {
      Program(path) {
        nsMap = new WeakMap();
        addImport = createImport(path);
      },

      JSXFragment(path) {
        const children = buildChildren(path.node);

        path.replaceWith({
          type: 'CallExpression',
          callee: addImport('Fragment'),
          arguments: children.length > 0 ? [$children(children)] : [],
          leadingComments: pureAnnotation(),
        });
      },

      JSXElement: {
        enter(path) {
          const { name } = path.node.openingElement;

          if (name.type === 'JSXNamespacedName') {
            return;
          }

          if (name.type === 'JSXMemberExpression' || isFunctionComponent(name)) {
            path.replaceWith({
              type: 'CallExpression',
              callee: convertJSXIdentifier(name),
              arguments: [buildProps(path.node)],
            });
          } else if (svgTags.has(name.name)) {
            nsMap.set(path.node, 'svgNS');
          } else if (mathmlTags.has(name.name)) {
            nsMap.set(path.node, 'mathmlNS');
          }
        },

        exit(path) {
          const props = buildProps(path.node);

          const noNs = props.properties.every((i) => {
            // @ts-expect-error
            return !t.isIdentifier(i.key, opts);
          });

          if (noNs) {
            const importName = nsMap.get(path.node) ?? nsMap.get(path.parent);

            if (importName !== undefined) {
              props.properties.push(
                $objectProperty(
                  $identifier('ns'),
                  addImport(importName),
                ),
              );
            }
          }

          path.replaceWith({
            type: 'CallExpression',
            callee: addImport('jsx'),
            arguments: [getTag(path.node), props],
            leadingComments: pureAnnotation(),
          });
        },
      },

      JSXAttribute(path) {
        // @ts-expect-error
        const tag = path.parent?.name.name;

        if (!(htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag))) {
          return;
        }

        const attr = path.node.name;
        const isNamespace = attr.type === 'JSXNamespacedName';

        if (!isNamespace) {
          if (htmlDOMAttributes.has(attr.name)) {
            attr.name = htmlDOMAttributes.get(attr.name);
            return;
          }

          const attrName = attr.name.toLowerCase();

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
            return;
          }

          if (booleanAttributes.has(attrName)) {
            attr.name = attrName;
            path.node.value ??= $stringLiteral('');
            return;
          }

          if (
            ariaAttributes.has(attrName) ||
            attrName === 'draggable' ||
            attrName === 'spellcheck' ||
            attrName.startsWith('data-')
          ) {
            const val = path.node.value;

            attr.name = attrName;

            if (val === null) {
              path.node.value = $stringLiteral('true');
              return;
            }

            if (
              val.type === 'JSXExpressionContainer' &&
              val.expression.type === 'BooleanLiteral'
            ) {
              path.node.value = $stringLiteral(val.expression.value ? 'true' : 'false');
            }

            return;
          }
        }

        if (
          tag === 'a' &&
          attr.name === 'xlinkHref' ||
          isNamespace &&
          attr.name.name === 'href' &&
          attr.namespace.name === 'xlink'
        ) {
          path.node.name = { type: 'JSXIdentifier', name: 'href' };
          return;
        }

        if (
          !isNamespace &&
          svgDOMAttributes.has(attr.name) &&
          svgTags.has(tag)
        ) {
          attr.name = svgDOMAttributes.get(attr.name);
        }
      },
    },
  };
};
