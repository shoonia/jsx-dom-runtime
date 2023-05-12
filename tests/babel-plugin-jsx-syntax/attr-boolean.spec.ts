import { t } from './transform';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('Babel transform HTML boolean attribute value `true` to empty string `""`', () => {
  it('should transform `readOnly` attribute', async () => {
    const result = await t('<input readOnly />');
    expect(result).toBe(_jsx + '_jsx("input",{readOnly:""});');
  });

  it('should transform `crossOrigin` attribute', async () => {
    const result = await t('<img crossOrigin />');
    expect(result).toBe(_jsx + '_jsx("img",{crossOrigin:""});');
  });

  it('should NOT transform `crossOrigin` attribute', async () => {
    const result = await t('<img crossOrigin="anonymous" />');
    expect(result).toBe(_jsx + '_jsx("img",{crossOrigin:"anonymous"});');
  });
});
