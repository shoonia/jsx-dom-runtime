import { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string): RuleTester.InvalidTestCase => ({
  code,
  errors: [{ messageId: 'noSpread' }],
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
  ],
});
