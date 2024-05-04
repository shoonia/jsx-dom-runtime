import type { PluginObj, NodePath } from '@babel/core';
import t from '@babel/types';

import { type TImportName, ImportSpec } from './ImportSpec';
import { eventListener } from './events';
import { buildProps, convertJSXIdentifier, convertJSXNamespacedName } from './util';
import {
  $children,
  $identifier,
  $objectProperty,
  $stringLiteral,
  $pureAnnotation,
} from './builders';
import {
  enumerated,
  booleanAttributes,
  attributes,
  DOMEvents,
  htmlTags,
  mathmlTags,
  htmlDOMAttributes,
  svgDOMAttributes,
  svgTags,
} from './collections';

const opts = { name: '_' } as const;

const jsxNode = new Set<t.Node['type']>(['JSXElement', 'JSXFragment']);

const isFunctionComponent = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);

  // [A-Z], [$] or [_]
  return (charCode >= 65 && charCode <= 90) ||
    charCode === 36 ||
    charCode === 95;
};

let nsMap: WeakMap<NodePath, TImportName>;
let importSpec: ImportSpec;

export const jsxTransform: PluginObj = {
  name: 'jsx-dom-runtime/babel-plugin-transform-jsx',
  visitor: {
    Program(path) {
      nsMap = new WeakMap();
      importSpec = new ImportSpec(path);
    },

    JSXFragment(path) {
      const children = t.react.buildChildren(path.node);

      if (jsxNode.has(path.parent.type)) {
        if (children.length > 0) {
          path.replaceWith($children(children));
        } else {
          path.remove();
        }
      } else {
        path.replaceWith({
          type: 'CallExpression',
          callee: importSpec.add('Fragment'),
          arguments: children.length > 0 ? [$children(children)] : [],
          leadingComments: $pureAnnotation(),
        });
      }
    },

    JSXElement: {
      enter(path) {
        const name = path.node.openingElement.name;

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
          nsMap.set(path, 'svgNs');
        } else if (mathmlTags.has(name.name)) {
          nsMap.set(path, 'mathmlNs');
        }
      },

      exit(path) {
        const name = path.node.openingElement.name as t.JSXIdentifier | t.JSXNamespacedName;
        const props = buildProps(path.node);

        const noNs = props.properties.every((i: t.ObjectProperty) =>
          !t.isIdentifier(i.key, opts),
        );

        if (noNs) {
          const importName = nsMap.get(path) ?? nsMap.get(path.findParent((p) => jsxNode.has(p.node.type)));

          if (importName !== undefined) {
            props.properties.push(
              $objectProperty(
                $identifier('_'),
                importSpec.add(importName),
              ),
            );
          }
        }

        path.replaceWith({
          type: 'CallExpression',
          callee: importSpec.add('jsx'),
          arguments: [
            name.type === 'JSXIdentifier'
              ? $stringLiteral(name.name)
              : convertJSXNamespacedName(name),
            props,
          ],
          leadingComments: $pureAnnotation(),
        });
      },
    },

    JSXSpreadChild(path) {
      path.replaceWith(path.node.expression);
    },

    JSXAttribute(path) {
      const node = path.node;
      const parent = path.parent;

      if (jsxNode.has(node.value?.type)) {
        node.value = {
          type: 'JSXExpressionContainer',
          expression: node.value as t.JSXElement,
        };
      }

      if (
        parent.type !== 'JSXOpeningElement' ||
        parent.name.type !== 'JSXIdentifier'
      ) {
        return;
      }

      const tag = parent.name.name;

      const isHTMLElement = htmlTags.has(tag);
      const isSVGElement = svgTags.has(tag);
      const isStandardElement = isHTMLElement || isSVGElement || mathmlTags.has(tag);
      const isCustomElement = !isStandardElement && tag.includes('-', 1);

      if (!(isStandardElement || isCustomElement)) {
        return;
      }

      const attr = node.name;

      if (attr.type === 'JSXNamespacedName') {
        if (
          attr.namespace.name === 'on' &&
          node.value.type === 'JSXExpressionContainer' &&
          node.value.expression.type !== 'JSXEmptyExpression'
        ) {
          eventListener(parent, attr.name, node.value.expression);
          path.remove();
        }

        else if (isCustomElement) {
          return;
        }

        else if (
          attr.name.name === 'href' &&
          attr.namespace.name === 'xlink'
        ) {
          node.name = attr.name;
        }

        return;
      }

      if (isCustomElement) {
        return;
      }

      if (htmlDOMAttributes.has(attr.name)) {
        attr.name = htmlDOMAttributes.get(attr.name);
        return;
      }

      const attrName = attr.name.toLowerCase();

      if (booleanAttributes.has(attrName)) {
        attr.name = attrName;
        node.value ??= $stringLiteral('');
      }

      else if (enumerated.has(attrName) || attrName.startsWith('data-')) {
        const val = node.value;

        attr.name = attrName;

        if (val === null) {
          node.value = $stringLiteral('true');
        }

        else if (
          val.type === 'JSXExpressionContainer' &&
          val.expression.type === 'BooleanLiteral'
        ) {
          node.value = $stringLiteral(val.expression.value ? 'true' : 'false');
        }
      }

      else if (isHTMLElement && attributes.has(attrName) || DOMEvents.has(attrName)) {
        attr.name = attrName;
      }

      else if (isSVGElement && svgDOMAttributes.has(attr.name)) {
        attr.name = svgDOMAttributes.get(attr.name);
      }
    },
  },
};
