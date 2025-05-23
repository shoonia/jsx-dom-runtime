import { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string, output: string): RuleTester.InvalidTestCase => ({
  code,
  output,
  errors: [{ messageId: 'preferAttribute' }],
});

createRuleTester('prefer-attributes-over-properties', {
  valid: [
    '<MyComponent className={foo} />;',
    '<div class={foo} />;',
    '<svg class={foo} />;',
    '<math class={foo} />;',
  ],
  invalid: [
    error('<div className={foo} />;', '<div class={foo} />;'),
    error('<svg className={foo} />;', '<svg class={foo} />;'),
    error('<math className={foo} />;', '<math class={foo} />;'),
    error('<div className="foo" />;', '<div class="foo" />;'),
    error('<div acceptCharset="utf-8" />;', '<div accept-charset="utf-8" />;'),
    error('<div httpEquiv="refresh" />;', '<div http-equiv="refresh" />;'),
    error('<label htmlFor="input-id" />;', '<label for="input-id" />;'),
    error('<svg xlinkHref="..." />;', '<svg href="..." />;'),
  ],
});
