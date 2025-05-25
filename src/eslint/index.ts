import type { TSESLint } from '@typescript-eslint/utils';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';
import { rule as onChildrenInVoidElement } from './on-children-in-void-element';
import { rule as preferAttribute } from './prefer-attributes-over-properties';
import { rule as jsxImport } from './jsx-import';
import { rule as noLegacyEventHandler } from './no-legacy-event-handler';

const config: TSESLint.FlatConfig.Config = {
  plugins: {
    'jsx-dom-runtime': {
      rules: {
        'no-spread-attribute-in-dom-element': noSpread,
        'on-children-in-void-element': onChildrenInVoidElement,
        'no-legacy-event-handler': noLegacyEventHandler,
        'prefer-attributes-over-properties': preferAttribute,
        'jsx-import': jsxImport,
      },
    },
  },
  rules: {
    'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
    'jsx-dom-runtime/on-children-in-void-element': 'error',
    'jsx-dom-runtime/no-legacy-event-handler': 'warn',
    'jsx-dom-runtime/prefer-attributes-over-properties': 'error',
    'jsx-dom-runtime/jsx-import': 'warn',
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
