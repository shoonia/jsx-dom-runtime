import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { isJSXIdentifier, isJSXOpeningElement, isStandardElement } from './utils.js';

export const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow JSX spread attributes in HTML, SVG, or MathML tags.',
      category: 'SyntaxError',
      recommended: false,
    },
    schema: [],
    messages: {
      noSpread: 'SyntaxError: JSX spread attributes in HTML, SVG, or MathML elements are not allowed and will cause your app to crash at runtime.'
    }
  },
  create(context) {
    return {
      JSXSpreadAttribute(node: TSESTree.JSXSpreadAttribute) {
        const parent = node.parent;

        if (!isJSXOpeningElement(parent) || !isJSXIdentifier(parent.name)) {
          return;
        }

        const tag = parent.name.name;

        if (isStandardElement(tag)) {
          context.report({
            node: node as any,
            messageId: 'noSpread',
          });
        }
      },
    };
  },
};
