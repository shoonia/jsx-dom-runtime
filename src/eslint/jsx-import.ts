import type { TSESLint } from '@typescript-eslint/utils';

export const rule: TSESLint.RuleModule<'jsxImport', []> = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce importing from "jsx-dom-runtime" instead of "jsx-dom-runtime/jsx-runtime".',
    },
    fixable: 'code',
    schema: [],
    messages: {
      jsxImport: 'Use import from "jsx-dom-runtime" instead of "jsx-dom-runtime/jsx-runtime"',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'jsx-dom-runtime/jsx-runtime') {
          context.report({
            node: node.source,
            messageId: 'jsxImport',
            fix: fixer => {
              const q = node.source.raw.at(0);
              return fixer.replaceText(node.source, `${q}jsx-dom-runtime${q}`);
            },
          });
        }
      },
    };
  },
};
