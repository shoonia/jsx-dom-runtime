import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('Babel transform HTML boolean attribute value `true` to empty string `""`', () => {
  it('should transform `readOnly` attribute', async () => {
    const result = await t('<input readOnly />');
    expect(result).toBe(_jsx + '_jsx("input",{readonly:""});');
  });

  it('should transform `crossOrigin` attribute', async () => {
    const result = await t('<img crossOrigin />');
    expect(result).toBe(_jsx + '_jsx("img",{crossorigin:""});');
  });

  it('should NOT transform `crossOrigin` attribute', async () => {
    const result = await t('<img crossOrigin="anonymous" />');
    expect(result).toBe(_jsx + '_jsx("img",{crossorigin:"anonymous"});');
  });

  it('should transform `contentEditable` attribute', async () => {
    const result = await t('<img contentEditable />');
    expect(result).toBe(_jsx + '_jsx("img",{contenteditable:""});');
  });

  it('should NOT transform `contentEditable` attribute', async () => {
    const result = await t('<img contentEditable="false" />');
    expect(result).toBe(_jsx + '_jsx("img",{contenteditable:"false"});');
  });

  it('should transform `capture` attribute', async () => {
    const result = await t('<input capture />');
    expect(result).toBe(_jsx + '_jsx("input",{capture:""});');
  });

  it('should NOT transform `capture` attribute', async () => {
    const result = await t('<input capture="user" />');
    expect(result).toBe(_jsx + '_jsx("input",{capture:"user"});');
  });
});
