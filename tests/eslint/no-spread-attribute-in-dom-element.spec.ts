import { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string, count = 1): RuleTester.InvalidTestCase => ({
  code,
  errors: Array(count).fill({ messageId: 'noSpread' }),
});

createRuleTester('no-spread-attribute-in-dom-element', {
  valid: [
    '<MyComponent {...props} />;',
    '<div id="test" />;',
    '<svg id="test" />;',
    '<math id="test" />;',
  ],
  invalid: [
    error('<div {...props} />;'),
    error('<svg {...props} />;'),
    error('<math {...props} />;'),
    error('<div {...foo}{...bar} />;', 2),
  ],
});
