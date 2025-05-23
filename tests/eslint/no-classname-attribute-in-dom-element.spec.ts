import { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string): RuleTester.InvalidTestCase => ({
  code,
  errors: [{ messageId: 'useClass' }],
  output: code.replace('className', 'class'),
});

createRuleTester('no-classname-attribute-in-dom-element', {
  valid: [
    '<MyComponent className={foo} />;',
    '<div class={foo} />;',
    '<svg class={foo} />;',
    '<math class={foo} />;',
  ],
  invalid: [
    error('<div className={foo} />;'),
    error('<svg className={foo} />;'),
    error('<math className={foo} />;'),
  ],
});
