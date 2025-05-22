import { createRuleTester } from '../utils/eslint';

// @ts-ignore
import rules from '../../eslint/index.cjs';

const key = 'jsx-dom-runtime/no-spread-attribute-in-dom-element';
const rule = rules[key];

createRuleTester().run(key, rule, {
  valid: [
    {
      code: '<MyComponent {...props} />;',
    },
    {
      code: '<div id="test" />;',
    },
    {
      code: '<svg id="test" />;',
    },
    {
      code: '<math id="test" />;',
    },
  ],
  invalid: [
    {
      code: '<div {...props} />;',
      errors: [{ messageId: 'noSpread' }],
    },
    {
      code: '<svg {...props} />;',
      errors: [{ messageId: 'noSpread' }],
    },
    {
      code: '<math {...props} />;',
      errors: [{ messageId: 'noSpread' }],
    },
  ],
});
