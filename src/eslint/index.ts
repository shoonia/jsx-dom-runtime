import type { Linter } from 'eslint';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';
import { rule as preferAttribute } from './prefer-attributes-over-properties';

const config: Linter.Config = {
  plugins: {
    'jsx-dom-runtime': {
      rules: {
        'no-spread-attribute-in-dom-element': noSpread,
        'prefer-attributes-over-properties': preferAttribute,
      },
    }
  },
  rules: {
    'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
    'jsx-dom-runtime/prefer-attributes-over-properties': 'error',
  },
};

export { config as default };
