import { RuleTester } from 'eslint';
import { parser } from 'typescript-eslint';

// @ts-ignore
import config from '../../eslint-plugin/index.cjs';

const rules = config.plugins['jsx-dom-runtime'].rules;

if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = (obj: {}) => JSON.parse(JSON.stringify(obj));
}

export const createRuleTester = (key: string, tests: {
  valid: (string | RuleTester.ValidTestCase)[];
  invalid: RuleTester.InvalidTestCase[];
}) =>
  new RuleTester({
    languageOptions: {
      parser: parser as any,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  })
    .run(key, rules[key], tests);
