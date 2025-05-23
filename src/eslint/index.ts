import type { Linter } from 'eslint';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';
import { rule as noClassName } from './no-classname-attribute-in-dom-element';

const config: Linter.Config = {
  plugins: {
    'jsx-dom-runtime': {
      rules: {
        'no-spread-attribute-in-dom-element': noSpread,
        'no-classname-attribute-in-dom-element': noClassName,
      },
    }
  },
  rules: {
    'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
    'jsx-dom-runtime/no-classname-attribute-in-dom-element': 'error',
  },
};

export { config as default };
