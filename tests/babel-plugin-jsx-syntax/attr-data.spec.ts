import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('Babel transform data-* attributes', () => {
  it('should transform empty `data-*` attribute to "true"', async () => {
    const result = await t('<div data-hidden />');
    expect(result).toBe(_jsx + '_jsx("div",{"data-hidden":"true"});');
  });

  it('should transform `data-*` attribute value `true` to "true"', async () => {
    const result = await t('<div data-hidden={true} />');
    expect(result).toBe(_jsx + '_jsx("div",{"data-hidden":"true"});');
  });

  it('should transform `data-*` attribute value `false` to "false"', async () => {
    const result = await t('<div data-hidden={false} />');
    expect(result).toBe(_jsx + '_jsx("div",{"data-hidden":"false"});');
  });
});
