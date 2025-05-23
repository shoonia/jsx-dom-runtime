import type { Linter } from 'eslint';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';

const config: Linter.Config = {
  plugins: {
    'jsx-dom-runtime': {
      rules: {
        'no-spread-attribute-in-dom-element': noSpread,
      },
    }
  },
  rules: {
    'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
  },
};

export { config as default };
