describe('Babel transform HTML boolean attribute value `true` to empty string `""`', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `readOnly` attribute', async () => {
    await expect('<input readOnly />').toBeTransform(i + '_jsx("input",{readonly:""});');
  });

  it('should transform `crossOrigin` attribute', async () => {
    await expect('<img crossOrigin />').toBeTransform(i + '_jsx("img",{crossorigin:""});');
  });

  it('should NOT transform `crossOrigin` attribute', async () => {
    await expect('<img crossOrigin="anonymous" />').toBeTransform(i + '_jsx("img",{crossorigin:"anonymous"});');
  });

  it('should transform `contentEditable` attribute', async () => {
    await expect('<img contentEditable />').toBeTransform(i + '_jsx("img",{contenteditable:""});');
  });

  it('should NOT transform `contentEditable` attribute', async () => {
    await expect('<img contentEditable="false" />').toBeTransform(i + '_jsx("img",{contenteditable:"false"});');
  });

  it('should transform `capture` attribute', async () => {
    await expect('<input capture />').toBeTransform(i + '_jsx("input",{capture:""});');
  });

  it('should NOT transform `capture` attribute', async () => {
    await expect('<input capture="user" />').toBeTransform(i + '_jsx("input",{capture:"user"});');
  });

  it('should transform `popover` attribute', async () => {
    await expect('<div popover />').toBeTransform(i + '_jsx("div",{popover:""});');
  });

  it('should transform `itemScope` attribute', async () => {
    await expect('<div itemScope />').toBeTransform(i + '_jsx("div",{itemscope:""});');
  });

  it('should transform `open` attribute', async () => {
    await expect('<details open />').toBeTransform(i + '_jsx("details",{open:""});');
  });

  it('should transform `noShade` attribute', async () => {
    await expect('<hr noShade />').toBeTransform(i + '_jsx("hr",{noshade:""});');
  });

  it('should transform `autocomplete` attribute', async () => {
    await expect('<input autocomplete />').toBeTransform(i + '_jsx("input",{autocomplete:""});');
  });

  it('should NOT transform `autocomplete` attribute', async () => {
    await expect('<input autocomplete={flag} />').toBeTransform(i + '_jsx("input",{autocomplete:flag});');
  });

  it('should transform `shadowrootclonable` attribute', async () => {
    await expect('<template shadowRootClonable />').toBeTransform(i + '_jsx("template",{shadowrootclonable:""});');
  });

  it('should transform `shadowRootDelegatesFocus` attribute', async () => {
    await expect('<template shadowRootDelegatesFocus />').toBeTransform(i + '_jsx("template",{shadowrootdelegatesfocus:""});');
  });

  it('should transform `shadowRootSerializable` attribute', async () => {
    await expect('<template shadowRootSerializable />').toBeTransform(i + '_jsx("template",{shadowrootserializable:""});');
  });
});
