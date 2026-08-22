import type { TSESLint } from '@typescript-eslint/utils';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';
import { rule as noChildrenInVoidElement } from './no-children-in-void-element';
import { rule as noLegacyEventHandler } from './no-legacy-event-handler';
import { rule as noSpreadChildren } from './no-spread-children';
import { rule as preferAttribute } from './prefer-attributes-over-properties';
import { rule as jsxImport } from './jsx-import';
import { rule as enfoceJsxExt } from './enforce-jsx-extension';

const config: TSESLint.FlatConfig.Config = {
  plugins: {
    'jsx-dom-runtime': {
      rules: {
        'no-spread-attribute-in-dom-element': noSpread,
        'no-children-in-void-element': noChildrenInVoidElement,
        'no-spread-children': noSpreadChildren,
        'no-legacy-event-handler': noLegacyEventHandler,
        'prefer-attributes-over-properties': preferAttribute,
        'jsx-import': jsxImport,
        'enforce-jsx-extension': enfoceJsxExt,
      },
    },
  },
  rules: {
    'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
    'jsx-dom-runtime/no-children-in-void-element': 'error',
    'jsx-dom-runtime/no-spread-children': 'error',
    'jsx-dom-runtime/no-legacy-event-handler': 'warn',
    'jsx-dom-runtime/prefer-attributes-over-properties': 'error',
    'jsx-dom-runtime/jsx-import': 'warn',
    'jsx-dom-runtime/enforce-jsx-extension': 'warn',
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
};

export { config as default };
