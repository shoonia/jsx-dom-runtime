import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { isStandardNode } from './utils.js';

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
        if (isStandardNode(node.parent)) {
          context.report({
            node: node as any,
            messageId: 'noSpread',
          });
        }
      },
    };
  },
};
