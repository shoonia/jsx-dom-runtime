import type { TSESLint } from '@typescript-eslint/utils';

import { isStandardNode } from './utils.js';

export const rule: TSESLint.RuleModule<string, []> = {
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow JSX spread attributes in HTML, SVG, or MathML tags.',
    },
    schema: [],
    messages: {
      noSpread: 'SyntaxError: JSX spread attributes in HTML, SVG, or MathML elements are not allowed and will cause your app to crash at runtime.'
    },
  },
  create(context) {
    return {
      JSXSpreadAttribute(node) {
        if (isStandardNode(node.parent)) {
          context.report({
            node,
            messageId: 'noSpread',
          });
        }
      },
    };
  },
};
