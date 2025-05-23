import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { isStandardNode } from './utils';
import { htmlDOMAttributes } from '../collections';

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer HTML, SVG, or MathML attributes over DOM property names in JSX. This rule auto-fixes common DOM property names (like className, htmlFor) to their standard attribute equivalents (class, for, etc.) for better compatibility and output.',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      preferAttribute: 'Use the standard attribute name (e.g., class, for) instead of the DOM property (e.g., className, htmlFor) in HTML, SVG, or MathML elements.'
    }
  },
  create(context) {
    return {
      JSXAttribute(node: TSESTree.JSXAttribute) {
        const name = htmlDOMAttributes.get(node.name.name as any);

        if (name && isStandardNode(node.parent)) {
          context.report({
            node: node.name as any,
            messageId: 'preferAttribute',
            fix: fixer => fixer.replaceText(node.name, name),
          });
        }
      }
    };
  },
};
