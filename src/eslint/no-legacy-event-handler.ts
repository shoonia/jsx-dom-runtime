import type { TSESLint } from '@typescript-eslint/utils';

import { isJSXIdentifier, isStandardNode } from './utils';

export const rule: TSESLint.RuleModule<'legacyEventHandler', []> = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow legacy event handlers (e.g., "onclick", "onchange") and suggest using the event directive syntax ("on:click", "on:change") instead.'
    },
    schema: [],
    messages: {
      legacyEventHandler: 'Legacy event handler "{{name}}" detected. Use the event directive syntax: "{{expected}}" instead.'
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (isJSXIdentifier(node.name)) {
          const name = node.name.name;

          if (
            name.startsWith('on') &&
            name.length > 2 &&
            isStandardNode(node.parent)
          ) {
            context.report({
              node: node.name,
              messageId: 'legacyEventHandler',
              data: {
                name,
                expected: 'on:' + name.slice(2)
              }
            });
          }
        }
      }
    };
  }
};
