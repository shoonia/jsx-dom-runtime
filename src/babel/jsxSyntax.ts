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

const annotateAsPure = (node: t.Node): void => {
  t.addComment(node, 'leading', '#__PURE__');
};

const get = (pass: PluginPass, name: string) =>
  pass.get(`jsx-dom-runtime/jsx-syntax/${name}`);
const set = (pass: PluginPass, name: string, v: any) =>
  pass.set(`jsx-dom-runtime/jsx-syntax/${name}`, v);

export const jsxSyntax = (): PluginObj => {
  return {
    name: 'jsx-dom-runtime/jsx-syntax',
    inherits: jsx.default || jsx,
    visitor: {
      Program: {
        enter(path, state) {
          set(state, 'id/jsx', createImportLazily(state, path, 'jsx'));
          set(state, 'id/fragment', createImportLazily(state, path, 'Fragment'));
        },
      },

      JSXFragment: {
        exit(path, file) {
          const children = buildChildren(path.node);
          const props = children.length > 0
            ? [buildChildrenProperty(children)]
            : [];

          const child = t.callExpression(
            get(file, 'id/fragment')(),
            [t.objectExpression(props)],
          );

          annotateAsPure(child);
          path.replaceWith(t.inherits(child, path.node));
        },
      },

      JSXElement: {
        exit(path, file) {
          const node = t.callExpression(
            get(file, 'id/jsx')(),
            [getTag(path.node), buildProps(path.node)],
          );

          annotateAsPure(node);
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

  function getTag(node: t.JSXElement) {
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
  }
};

function createImportLazily(
  pass: PluginPass,
  path: NodePath<t.Program>,
  importName: string,
): () => t.Identifier | t.MemberExpression {
  return () => {
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
}
