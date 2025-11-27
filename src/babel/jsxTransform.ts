import type { PluginObj, NodePath } from '@babel/core';
import t from '@babel/types';

import { type TImportName, ImportSpec } from './ImportSpec';
import { eventListener } from './events';
import {
  createDirectiveAssignExp,
  createDirectiveCallExp,
  setUtility,
  isRef
} from './directives';
import { buildProps, convertJSXIdentifier, convertJSXNamespacedName } from './util';
import {
  $children,
  $identifier,
  $objectProperty,
  $stringLiteral,
  $pureAnnotation,
  $jsxExpressionContainer,
} from './builders';
import {
  enumerated,
  booleanAttributes,
  attributes,
  DOMEvents,
  svgDOMAttributes,
  charCode,
  jsxNode,
} from './collections';
import { htmlTags, mathmlTags, svgTags, htmlDOMAttributes } from '../collections';

const opts = { name: '_' } as const;

const isFunctionComponent = (name: t.JSXIdentifier): boolean =>
  charCode.has(name.name.charCodeAt(0));

const isChildren = (node: t.Node): node is t.ObjectProperty =>
  node.type === 'ObjectProperty' && node.key.type === 'Identifier' && node.key.name === 'children';

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
          const props = buildProps(path.node);
          const children = t.react.buildChildren(path.node);

          if (children.length > 0) {
            props.properties.push(
              $objectProperty(
                $identifier('children'),
                $children(children),
              ),
            );
          }

          path.replaceWith({
            type: 'CallExpression',
            callee: convertJSXIdentifier(name),
            arguments: [props],
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
        const refs = props.properties.filter(isRef);

        const childrenContent = t.react.buildChildren(path.node);
        const childrenProps = props.properties.findLast(isChildren);
        const children = childrenContent.length > 0
          ? childrenContent
          : childrenProps != null
            ? [childrenProps.value as t.Expression]
            : [];

        const args: t.Expression[] = [
          name.type === 'JSXIdentifier'
            ? $stringLiteral(name.name)
            : convertJSXNamespacedName(name),
          props,
        ];

        if (childrenProps != null) {
          props.properties = props.properties.filter((i) => !isChildren(i));
        }

        if (children.length > 0) {
          args.push($children(children));
        }

        if (refs.length > 1) {
          const ref = refs[0];

          ref.value = {
            type: 'ArrayExpression',
            elements: refs.map((i) => i.value),
          };

          props.properties = props.properties.filter((i) => !isRef(i));
          props.properties.push(ref);
        }

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
          arguments: args,
          leadingComments: $pureAnnotation(),
        });
      },
    },

    JSXSpreadChild(path) {
      path.replaceWith(path.node.expression);
    },

    JSXSpreadAttribute(path) {
      const parent = path.parent;

      if (
        parent.type === 'JSXOpeningElement' &&
        parent.name.type === 'JSXIdentifier' &&
        !isFunctionComponent(parent.name)
      ) {
        throw path.buildCodeFrameError(
          '\n\nSyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes.\n',
          SyntaxError
        );
      }
    },

    JSXAttribute(path) {
      const attribute = path.node;
      const openingElement = path.parent;
      const attrValue = attribute.value;

      if (jsxNode.has(attrValue?.type)) {
        attribute.value = $jsxExpressionContainer(attrValue as t.JSXElement);
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
        const name = attrName.name.name;
        const directive = attrName.namespace.name;

        switch (directive) {
          case 'on':
            eventListener(openingElement, name, attrValue);
            return path.remove();
          case 'attr':
            createDirectiveCallExp(openingElement, name, attrValue);
            return path.remove();
          case 'prop':
            createDirectiveAssignExp(openingElement, name, attrValue);
            return path.remove();
        }

        if (isCustomElement) {
          return;
        }

        if (directive === 'xlink' && name === 'href') {
          attribute.name = attrName.name;
        }

        return;
      }

      switch (attrName.name) {
        case 'style':
          setUtility(openingElement, attrValue, importSpec.add('setStyle'));
          return path.remove();
        case 'dataset':
          setUtility(openingElement, attrValue, importSpec.add('setDataset'));
          return path.remove();
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
      } else if (enumerated.has(aName) || aName.startsWith('data-')) {
        attrName.name = aName;

        if (attrValue == null) {
          attribute.value = $stringLiteral('true');
        } else if (
          attrValue.type === 'JSXExpressionContainer' &&
          attrValue.expression.type === 'BooleanLiteral'
        ) {
          attribute.value = $stringLiteral(attrValue.expression.value.toString());
        }
      } else if (DOMEvents.has(aName)) {
        createDirectiveAssignExp(openingElement, aName, attrValue);
        path.remove();
      } else if (isHTMLElement && attributes.has(aName)) {
        attrName.name = aName;
      } else if (isSVGElement && svgDOMAttributes.has(attrName.name)) {
        attrName.name = svgDOMAttributes.get(attrName.name);
      }
    },
  },
};
