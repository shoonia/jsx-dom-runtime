import { RuleTester } from 'eslint';
import { parser } from 'typescript-eslint';

if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = (obj: {}) => JSON.parse(JSON.stringify(obj));
}

export const createRuleTester = () => new RuleTester({
  languageOptions: {
    parser: parser as any,
    sourceType: 'module',
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});
