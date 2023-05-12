import { t } from './transform';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('Babel transform HTML boolean attribute value `true` to empty string `""`', () => {
  it('should work with `readOnly` attribute', async () => {
    const result = await t('<input readOnly />');
    expect(result).toBe(_jsx + '_jsx("input",{readOnly:""});');
  });
});
