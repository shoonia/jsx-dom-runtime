import type { TSESLint } from '@typescript-eslint/utils';

import { htmlDOMAttributes } from '../collections';
import { isStandardNode } from './utils';

export const rule: TSESLint.RuleModule<string, []> = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer HTML, SVG, or MathML attributes over DOM property names in JSX. This rule auto-fixes common DOM property names (like className, htmlFor) to their standard attribute equivalents (class, for, etc.) for better compatibility and output. If you want to use the property instead of the attribute, use the syntax prop:className, prop:htmlFor, etc.',
    },
    fixable: 'code',
    schema: [],
    messages: {
      preferAttribute: 'Use the standard attribute name (e.g., class, for) instead of the DOM property (e.g., className, htmlFor) in HTML, SVG, or MathML elements. If you want to use the property instead, use the directive syntax: prop:className, prop:htmlFor, etc.'
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const name = htmlDOMAttributes.get(node.name.name);

        if (name && isStandardNode(node.parent)) {
          context.report({
            node: node.name,
            messageId: 'preferAttribute',
            fix: fixer => fixer.replaceText(node.name, name),
          });
        }
      }
    };
  },
};
