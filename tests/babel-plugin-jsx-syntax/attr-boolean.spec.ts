describe('Babel transform HTML boolean attribute value `true` to empty string `""`', () => {
  const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `readOnly` attribute', async () => {
    await expect('<input readOnly />').toBeTransform(_jsx + '_jsx("input",{readonly:""});');
  });

  it('should transform `crossOrigin` attribute', async () => {
    await expect('<img crossOrigin />').toBeTransform(_jsx + '_jsx("img",{crossorigin:""});');
  });

  it('should NOT transform `crossOrigin` attribute', async () => {
    await expect('<img crossOrigin="anonymous" />').toBeTransform(_jsx + '_jsx("img",{crossorigin:"anonymous"});');
  });

  it('should transform `contentEditable` attribute', async () => {
    await expect('<img contentEditable />').toBeTransform(_jsx + '_jsx("img",{contenteditable:""});');
  });

  it('should NOT transform `contentEditable` attribute', async () => {
    await expect('<img contentEditable="false" />').toBeTransform(_jsx + '_jsx("img",{contenteditable:"false"});');
  });

  it('should transform `capture` attribute', async () => {
    await expect('<input capture />').toBeTransform(_jsx + '_jsx("input",{capture:""});');
  });

  it('should NOT transform `capture` attribute', async () => {
    await expect('<input capture="user" />').toBeTransform(_jsx + '_jsx("input",{capture:"user"});');
  });

  it('should transform `popover` attribute', async () => {
    await expect('<div popover />').toBeTransform(_jsx + '_jsx("div",{popover:""});');
  });

  it('should transform `itemScope` attribute', async () => {
    await expect('<div itemScope />').toBeTransform(_jsx + '_jsx("div",{itemscope:""});');
  });

  it('should transform `open` attribute', async () => {
    await expect('<details open />').toBeTransform(_jsx + '_jsx("details",{open:""});');
  });
});
