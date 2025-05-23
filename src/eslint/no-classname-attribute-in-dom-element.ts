import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';
import { isJSXIdentifier, isJSXOpeningElement, isStandardElement } from './utils.js';

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Auto-fix `className` to `class` in HTML, SVG, or MathML tags',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      useClass: 'Use `class` instead of `className` in HTML, SVG, or MathML elements.'
    }
  },
  create(context) {
    return {
      JSXAttribute(node: TSESTree.JSXAttribute) {
        if (node.name.name !== 'className') {
          return;
        }

        const parent = node.parent;

        if (!isJSXOpeningElement(parent) || !isJSXIdentifier(parent.name)) {
          return;
        }

        const tag = parent.name.name;

        if (isStandardElement(tag)) {
          context.report({
            node: node.name as any,
            messageId: 'useClass',
            fix: fixer => fixer.replaceText(node.name, 'class'),
          });
        }
      }
    };
  },
};
