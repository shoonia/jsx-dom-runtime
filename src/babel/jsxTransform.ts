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
  charCode,
  jsxNode,
} from './collections';

const opts = { name: '_' } as const;

const isFunctionComponent = (name: t.JSXIdentifier): boolean =>
  charCode.has(name.name.charCodeAt(0));

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
      const attribute = path.node;
      const openingElement = path.parent;
      const attrValue = attribute.value;

      if (jsxNode.has(attrValue?.type)) {
        attribute.value = {
          type: 'JSXExpressionContainer',
          expression: attrValue as t.JSXElement,
        };
      }

      if (
        openingElement.type !== 'JSXOpeningElement' ||
        openingElement.name.type !== 'JSXIdentifier'
      ) {
        return;
      }

      const tag = openingElement.name.name;

      const isHTMLElement = htmlTags.has(tag);
      const isSVGElement = svgTags.has(tag);
      const isStandardElement = isHTMLElement || isSVGElement || mathmlTags.has(tag);
      const isCustomElement = !isStandardElement && tag.includes('-', 1);

      if (!(isStandardElement || isCustomElement)) {
        return;
      }

      const attrName = attribute.name;

      if (attrName.type === 'JSXNamespacedName') {
        if (
          attrName.namespace.name === 'on' &&
          attrValue.type === 'JSXExpressionContainer'
        ) {
          eventListener(openingElement, attrName.name, attrValue);
          path.remove();
        }

        else if (isCustomElement) {
          return;
        }

        else if (
          attrName.name.name === 'href' &&
          attrName.namespace.name === 'xlink'
        ) {
          attribute.name = attrName.name;
        }

        return;
      }

      if (isCustomElement) {
        return;
      }

      if (htmlDOMAttributes.has(attrName.name)) {
        attrName.name = htmlDOMAttributes.get(attrName.name);
        return;
      }

      const aName = attrName.name.toLowerCase();

      if (booleanAttributes.has(aName)) {
        attrName.name = aName;
        attribute.value ??= $stringLiteral('');
      }

      else if (enumerated.has(aName) || aName.startsWith('data-')) {
        attrName.name = aName;

        if (attrValue === null) {
          attribute.value = $stringLiteral('true');
        }

        else if (
          attrValue.type === 'JSXExpressionContainer' &&
          attrValue.expression.type === 'BooleanLiteral'
        ) {
          attribute.value = $stringLiteral(attrValue.expression.value ? 'true' : 'false');
        }
      }

      else if (isHTMLElement && attributes.has(aName) || DOMEvents.has(aName)) {
        attrName.name = aName;
      }

      else if (isSVGElement && svgDOMAttributes.has(attrName.name)) {
        attrName.name = svgDOMAttributes.get(attrName.name);
      }
    },
  },
};
