import type { TSESLint } from '@typescript-eslint/utils';

export const rule: TSESLint.RuleModule<'noSpreadChildren', []> = {
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of JSX spread children (e.g., {...items} as a child). Use the value directly instead.'
    },
    fixable: 'code',
    schema: [],
    messages: {
      noSpreadChildren: 'JSX spread children are not allowed. Use the value directly as a child instead.'
    },
  },
  create(context) {
    return {
      JSXSpreadChild(node) {
        context.report({
          node,
          messageId: 'noSpreadChildren',
          fix: fixer => fixer.replaceText(
            node,
            '{' + context.sourceCode.getText(node.expression) + '}',
          )
        });
      }
    };
  }
};
