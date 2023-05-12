import type { PluginObj, PluginPass, NodePath } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

import { boolAttrs, DOMEvents } from './tags/dom';
import { html, sureSvg } from './tags/tags';
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

const set = (state: PluginPass, name: string, v: any) => {
  state.set(`jsx-dom-runtime/babel-plugin-jsx-syntax/${name}`, v);
};

const createImport = (
  path: NodePath<t.Program>,
  state: PluginPass,
  importName: string,
) => {
  return (): t.Identifier | t.MemberExpression => {
    const source = 'jsx-dom-runtime';

    if (isModule(path)) {
      const ref = get(state, `imports/${importName}`);

      if (ref) {
        return t.cloneNode(ref);
      }

      const uncompiledRef = addNamed(path, importName, source, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      });

      set(state, `imports/${importName}`, uncompiledRef);

      return uncompiledRef;
    }

    let reference = get(state, `requires/${source}`);

    if (reference) {
      reference = t.cloneNode(reference);
    } else {
      reference = addNamespace(path, source, {
        importedInterop: 'uncompiled',
      });
      set(state, `requires/${source}`, reference);
    }

    return t.memberExpression(reference, t.identifier(importName));
  };
};

export const jsxSyntax = (): PluginObj => {
  const nsMap = new WeakMap<t.Node, number>();

  return {
    name: 'jsx-dom-runtime/babel-plugin-jsx-syntax',
    visitor: {
      Program: {
        enter(path, state) {
          set(state, 'id/jsx', createImport(path, state, 'jsx'));
          set(state, 'id/fragment', createImport(path, state, 'Fragment'));
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
            get(state, 'id/fragment')(),
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
          } else if (sureSvg.has(name.name)) {
            nsMap.set(path.node, 1);
          }
        },

        exit(path, state) {
          const node = path.node;
          const props = buildProps(node);

          const noNs = props.every((i) => {
            // @ts-expect-error
            return i.key?.name !== '__ns';
          });

          if (noNs) {
            const ns = nsMap.get(path.node) ?? nsMap.get(path.parent);

            if (typeof ns === 'number') {
              props.push(
                t.objectProperty(
                  t.identifier('__ns'),
                  t.numericLiteral(ns),
                ),
              );
            }
          }

          const callExp = t.callExpression(
            get(state, 'id/jsx')(),
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

        if (!(html.has(tag) || sureSvg.has(tag))) {
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

          const attrName = attr.name.toLowerCase();

          if (boolAttrs.has(attr.name)) {
            path.node.value ??= t.stringLiteral('');
            return;
          }

          if (DOMEvents.has(attrName)) {
            attr.name = attrName;
          }
        }
      },
    },
  };
};
