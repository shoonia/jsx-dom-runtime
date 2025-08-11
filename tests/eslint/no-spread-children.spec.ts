import { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string, output: string): RuleTester.InvalidTestCase => ({
  code,
  errors: [{ messageId: 'noSpreadChildren' }],
  output
});

createRuleTester('no-spread-children', {
  valid: [],
  invalid: [
    error('<div>{...list}</div>;', '<div>{list}</div>;'),
    error('<div>hello{...one}hello</div>;', '<div>hello{one}hello</div>;'),
  ],
});
