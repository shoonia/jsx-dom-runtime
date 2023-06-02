import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('`spellcheck` attribute', () => {
  it('should transform empty `spellcheck` value to "true"', async () => {
    const result = await t`<div spellcheck />`;
    expect(result).toBe(_jsx + '_jsx("div",{spellcheck:"true"});');
  });

  it('should transform `spellcheck` value `true` to "true"', async () => {
    const result = await t`<div spellcheck={true} />`;
    expect(result).toBe(_jsx + '_jsx("div",{spellcheck:"true"});');
  });

  it('should transform `spellcheck` value `false` to "false"', async () => {
    const result = await t`<div spellcheck={false} />`;
    expect(result).toBe(_jsx + '_jsx("div",{spellcheck:"false"});');
  });

  it('should lower case `spellcheck` attribute name', async () => {
    const result = await t`<div spellCheck="false" />`;
    expect(result).toBe(_jsx + '_jsx("div",{spellcheck:"false"});');
  });
});
