import type { PluginObj, PluginPass, NodePath } from '@babel/core';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

import { isBoolAttribute, isDOMEvent } from './tags/dom';
import { isHtmlTag, maybeSvg, sureSvg } from './tags/tags';
import {
  buildChildren,
  buildProps,
  convertJSXIdentifier,
  getTag,
} from './util';

const addPureAnnotate = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const isCapitalLetter = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
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

          if (t.isJSXMemberExpression(name) || isCapitalLetter(name)) {
            const callExp = t.callExpression(
              convertJSXIdentifier(name, path.node.openingElement),
              [buildProps(path.node)],
            );

            const node = t.isJSXElement(path.parent) || t.isJSXFragment(path.parent)
              ? t.jsxExpressionContainer(callExp)
              : callExp;

            path.replaceWith(t.inherits(node, path.node));
          }
        },

        exit(path, state) {
          const node = t.callExpression(
            get(state, 'id/jsx')(),
            [getTag(path.node), buildProps(path.node)],
          );

          addPureAnnotate(node);
          path.replaceWith(t.inherits(node, path.node));
        },
      },

      JSXOpeningElement(path) {
        const node = path.node;

        if (!t.isJSXIdentifier(node.name)) {
          return;
        }

        if (
          sureSvg(node.name.name) ||
          maybeSvg(node.name.name) &&
          t.isJSXElement(path.parentPath.parent) &&
          path.parentPath.parent.openingElement.attributes.some((i) => {
            // @ts-expect-error
            return t.isJSXAttribute(i) && i.name.name === '__ns' && i.value.expression?.value === 1;
          })
        ) {
          const noNs = node.attributes.every((i) => {
            return !t.isJSXAttribute(i) || i.name.name !== '__ns';
          });

          if (noNs) {
            node.attributes.push(
              t.jSXAttribute(
                t.jSXIdentifier('__ns'),
                t.jSXExpressionContainer(t.numericLiteral(1)),
              ),
            );
          }
        }
      },

      JSXAttribute(path) {
        if (t.isJSXElement(path.node.value)) {
          path.node.value = t.jsxExpressionContainer(path.node.value);
          return;
        }

        const { parent } = path;

        if (!t.isJSXOpeningElement(parent) || !t.isJSXIdentifier(parent.name)) {
          return;
        }

        const tag = parent.name.name;

        if (!(isHtmlTag(tag) || sureSvg(tag))) {
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

          if (isBoolAttribute(attr.name) && path.node.value === null) {
            path.node.value = t.stringLiteral('');
            return;
          }

          const attrName = attr.name.toLowerCase();

          if (isDOMEvent(attrName)) {
            attr.name = attrName;
          }
        }
      },
    },
  };
};
