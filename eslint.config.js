import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';
import jsx from './eslint-plugin/index.cjs';

export default defineConfig(
  {
    ignores: [
      'babel-preset/',
      'eslint-plugin/',
      'jsx-runtime/',
    ],
  },
  js.configs.recommended,
  ts.configs.recommended,
  ts.configs.stylistic,
  jsx,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-else-return': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      'linebreak-style': 'off',
      quotes: [
        'error',
        'single',
      ],
      semi: [
        'error',
        'always',
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
);
