import type { PluginObj, PluginPass, NodePath } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

import { boolAttrs, DOMEvents, htmlTags, svgTags } from './collections';
import {
  buildChildren,
  buildProps,
  convertJSXIdentifier,
  getTag,
} from './util';

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

const get = (state: PluginPass, name: string) => {
  return state.get(`jsx-dom-runtime/babel-plugin-jsx-syntax/${name}`);
};

const set = (state: PluginPass, name: string, v: any): void => {
  state.set(`jsx-dom-runtime/babel-plugin-jsx-syntax/${name}`, v);
};

const createImport = (path: NodePath<t.Program>) => {
  const cache = new Map();

  return (importName: string) => {
    const source = 'jsx-dom-runtime';
    const isMod = isModule(path);

    const key = isMod ? importName : source;

    if (cache.has(key)) {
      return t.cloneNode(cache.get(key));
    }

    const newImport = isMod
      ? addNamed(path, importName, source, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      })
      : addNamespace(path, source, {
        importedInterop: 'uncompiled',
      });

    cache.set(key, newImport);

    return newImport;
  };
};

export const jsxSyntax = (): PluginObj => {
  const nsSvg = new WeakSet<t.Node>();

  return {
    name: 'jsx-dom-runtime/babel-plugin-jsx-syntax',
    visitor: {
      Program: {
        enter(path, state) {
          set(state, 'imports', createImport(path));
        },
      },

      JSXFragment: {
        exit(path, state) {
          const children = buildChildren(path.node);

          const props = children.length > 0 ? [
            children.length === 1
              ? children[0]
              : t.arrayExpression(children)
          ] : [];

          const child = t.callExpression(
            get(state, 'imports')('Fragment'),
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

        exit(path, state) {
          const node = path.node;
          const props = buildProps(node);

          const noNs = props.every((i) => {
            // @ts-expect-error
            return i.key?.name !== '__ns';
          });

          if (noNs && nsSvg.has(path.node) || nsSvg.has(path.parent)) {
            props.push(
              t.objectProperty(
                t.identifier('__ns'),
                t.numericLiteral(1),
              ),
            );
          }

          const callExp = t.callExpression(
            get(state, 'imports')('jsx'),
            [getTag(node), t.objectExpression(props)],
          );

          addPureAnnotate(callExp);
          path.replaceWith(t.inherits(callExp, node));
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
          }

          return;
        }

        if (
          tag === 'a' &&
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
