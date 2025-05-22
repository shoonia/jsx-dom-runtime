import type { Rule } from 'eslint';

import { rule as noSpread } from './no-spread-attribute-in-dom-element';

const rules: Record<string, Rule.RuleModule> = {
  'jsx-dom-runtime/no-spread-attribute-in-dom-element': noSpread,
};

export { rules as default };
