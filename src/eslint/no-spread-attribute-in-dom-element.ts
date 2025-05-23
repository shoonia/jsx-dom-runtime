import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { htmlTags, svgTags, mathmlTags } from '../tags';

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
      JSXOpeningElement(node: TSESTree.JSXOpeningElement) {
        if (node.name.type !== 'JSXIdentifier') {
          return;
        }

        const tag = node.name.name;

        if (htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag)) {
          for (const attr of node.attributes) {
            if (attr.type === 'JSXSpreadAttribute') {
              context.report({
                node: attr as any,
                messageId: 'noSpread',
              });
            }
          }
        }
      }
    };
  },
};
