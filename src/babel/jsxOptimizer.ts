import type { PluginObj } from '@babel/core';
import t from '@babel/types';

import { buildProps, convertJSXIdentifier } from './util';

const isCapitalLetter = (name: t.JSXIdentifier): boolean => {
  const charCode = name.name.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
};

export const jsxOptimizer = (): PluginObj => {
  return {
    name: 'babel-plugin-optimize-jsx-runtime',
    visitor: {
      JSXElement(path) {
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
    },
  };
};
