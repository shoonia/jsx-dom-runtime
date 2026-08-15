import type { PluginObj, NodePath } from '@babel/core';
import t from '@babel/types';

import { type TImportName, ImportSpec } from './ImportSpec';
import { eventListener } from './events';
import {
  createDirective,
  setAttributeCallExp,
  propAssignmentExp,
  setUtility,
  setSignalishProp,
  setSignalishAttr,
} from './directives';
import {
  buildProps,
  convertJSXIdentifier,
  convertJSXNamespacedName,
  flattenElements,
} from './util';
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
  jsxNode,
} from './collections';
import {
  htmlTags,
  mathmlTags,
  svgTags,
  htmlDOMAttributes,
  svgDOMAttributes,
} from '../collections';
import {
  isRef,
  isFunctionComponent,
  isChildren,
  isJsxContainerWithBoolean,
  isJsxAttributeLiteralValue,
} from './guards';

const opts = { name: '_' } as const;

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
      const children = flattenElements(t.react.buildChildren(path.node));

      path.replaceWith(
        children.length > 0
          ? $children(children)
          : t.nullLiteral(),
      );
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

        if (childrenProps != null) {
          props.properties = props.properties.filter((i) => !isChildren(i));
        }

        if (refs.length > 1) {
          const ref = refs.at(-1);

          ref.value = {
            type: 'ArrayExpression',
            elements: flattenElements(refs.map((i) => i.value)),
          };

          props.properties = props.properties.filter(
            (i) => !isRef(i) || i === ref,
          );
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

        const args: t.Expression[] = [
          name.type === 'JSXIdentifier'
            ? $stringLiteral(name.name)
            : convertJSXNamespacedName(name),
          props,
        ];

        if (children.length > 0) {
          args.push($children(flattenElements(children)));
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
          case 'attr': {
            if (isJsxAttributeLiteralValue(attrValue)) {
              createDirective(openingElement, setAttributeCallExp(name, attrValue));
            } else {
              setSignalishAttr(openingElement, importSpec.add('setSignalish'), name, attrValue);
            }
            return path.remove();
          }
          case 'prop': {
            if (isJsxAttributeLiteralValue(attrValue)) {
              createDirective(openingElement, propAssignmentExp(name, attrValue));
            } else {
              setSignalishProp(openingElement, importSpec.add('setSignalish'), name, attrValue);
            }
            return path.remove();
          }
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
        case 'style': {
          if (isJsxAttributeLiteralValue(attrValue)) {
            return;
          }

          setUtility(openingElement, attrValue, importSpec.add('setStyle'));
          return path.remove();
        }
        case 'dataset':
          setUtility(openingElement, attrValue, importSpec.add('setDataset'));
          return path.remove();
        case 'attributes':
          setUtility(openingElement, attrValue, importSpec.add('setAttributes'));
          return path.remove();
      }

      if (isCustomElement) {
        return;
      }

      if (htmlDOMAttributes.has(attrName.name)) {
        attrName.name = htmlDOMAttributes.get(attrName.name);
        return;
      }

      if (isSVGElement && svgDOMAttributes.has(attrName.name)) {
        attrName.name = svgDOMAttributes.get(attrName.name);
        return;
      }

      const aName = attrName.name.toLowerCase();

      if (isHTMLElement) {
        attrName.name = aName;
      }

      if (booleanAttributes.has(aName)) {
        attribute.value ??= $stringLiteral('');
        return;
      }

      if (
        enumerated.has(aName) ||
        aName.startsWith('data-') ||
        aName.startsWith('aria-')
      ) {
        if (attrValue == null) {
          attribute.value = $stringLiteral('true');
        } else if (isJsxContainerWithBoolean(attrValue)) {
          attribute.value = $stringLiteral(attrValue.expression.value.toString());
        }
        return;
      }

      if (aName.startsWith('on')) {
        createDirective(
          openingElement,
          propAssignmentExp(aName === 'ondoubleclick' ? 'ondblclick' : aName, attrValue),
        );
        path.remove();
      }
    },
  },
};
