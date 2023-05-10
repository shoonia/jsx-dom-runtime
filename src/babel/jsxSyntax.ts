import type { PluginObj, PluginPass, NodePath } from '@babel/core';
import jsx from '@babel/plugin-syntax-jsx';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';
import t from '@babel/types';

import {
  buildChildren,
  buildChildrenProperty,
  buildProps,
  convertJSXIdentifier,
} from './util';

const addPureAnnotate = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const get = (state: PluginPass, name: string) => {
  return state.get(`jsx-dom-runtime/babel-plugin-jsx-syntax/${name}`);
};

const set = (state: PluginPass, name: string, v: any) => {
  state.set(`jsx-dom-runtime/babel-plugin-jsx-syntax/${name}`, v);
};

const createImport = (
  path: NodePath<t.Program>,
  pass: PluginPass,
  importName: string,
) => {
  return (): t.Identifier | t.MemberExpression => {
    const source = 'jsx-dom-runtime';

    if (isModule(path)) {
      const ref = get(pass, `imports/${importName}`);

      if (ref) {
        return t.cloneNode(ref);
      }

      const uncompiledRef = addNamed(path, importName, source, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      });

      set(pass, `imports/${importName}`, uncompiledRef);

      return uncompiledRef;
    }

    let reference = get(pass, `requires/${source}`);

    if (reference) {
      reference = t.cloneNode(reference);
    } else {
      reference = addNamespace(path, source, {
        importedInterop: 'uncompiled',
      });
      set(pass, `requires/${source}`, reference);
    }

    return t.memberExpression(reference, t.identifier(importName));
  };
};

const getTag = (node: t.JSXElement) => {
  const tagExpr = convertJSXIdentifier(
    node.openingElement.name,
    node.openingElement,
  );

  const tagName = t.isIdentifier(tagExpr)
    ? tagExpr.name
    : t.isStringLiteral(tagExpr)
      ? tagExpr.value
      : undefined;

  if (t.react.isCompatTag(tagName)) {
    return t.stringLiteral(tagName);
  }

  return tagExpr;
};

export const jsxSyntax = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/babel-plugin-jsx-syntax',
    inherits: jsx.default || jsx,
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
          const props = children.length > 0
            ? [buildChildrenProperty(children)]
            : [];

          const child = t.callExpression(
            get(state, 'id/fragment')(),
            [t.objectExpression(props)],
          );

          addPureAnnotate(child);
          path.replaceWith(t.inherits(child, path.node));
        },
      },

      JSXElement: {
        exit(path, state) {
          const node = t.callExpression(
            get(state, 'id/jsx')(),
            [getTag(path.node), buildProps(path.node)],
          );

          addPureAnnotate(node);
          path.replaceWith(t.inherits(node, path.node));
        },
      },

      JSXAttribute(path) {
        if (t.isJSXElement(path.node.value)) {
          path.node.value = t.jsxExpressionContainer(path.node.value);
        }
      },
    },
  };
};
