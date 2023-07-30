import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('Babel transform aria-* attributes', () => {
  it('should transform empty `aria-*` attribute to "true"', async () => {
    const result = await t`<div aria-hidden />`;
    expect(result).toBe(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should transform `aria-*` attribute value `true` to "true"', async () => {
    const result = await t`<div aria-hidden={true} />`;
    expect(result).toBe(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should transform `aria-*` attribute value `false` to "false"', async () => {
    const result = await t`<div aria-hidden={false} />`;
    expect(result).toBe(_jsx + '_jsx("div",{"aria-hidden":"false"});');
  });

  it('should correct compiled string "true"', async () => {
    const result = await t`<div aria-hidden="true" />`;
    expect(result).toBe(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should correct compiled string "false"', async () => {
    const result = await t`<div aria-hidden="false" />`;
    expect(result).toBe(_jsx + '_jsx("div",{"aria-hidden":"false"});');
  });
});
