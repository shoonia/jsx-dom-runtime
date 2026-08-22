import type { TSESLint, TSESTree } from '@typescript-eslint/utils';

import { nonJsxExtensions } from './utils';

export const rule: TSESLint.RuleModule<'enforceJsxExt', []> = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce that JSX code is only written inside ".jsx" or ."tsx" files.',
    },
    schema: [],
    messages: {
      enforceJsxExt: 'JSX {{type}} found in a "{{ext}}" file. Move this code to a ".jsx" or ".tsx" file.',
    },
  },
  create(context) {
    const filename = context.physicalFilename;
    const ext = filename.slice(filename.lastIndexOf('.'));

    if (!nonJsxExtensions.has(ext)) {
      return {};
    }

    const reportJsxError = (node: TSESTree.JSXElement | TSESTree.JSXFragment, type: string) =>
      context.report({
        node,
        messageId: 'enforceJsxExt',
        data: { type, ext }
      });

    return {
      JSXElement(node) {
        reportJsxError(node, 'element');
      },

      JSXFragment(node) {
        reportJsxError(node, 'fragment');
      },
    };
  },
};
