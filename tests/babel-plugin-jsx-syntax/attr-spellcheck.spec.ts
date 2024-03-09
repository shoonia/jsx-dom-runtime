describe('`spellcheck` attribute', () => {
  const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty `spellcheck` value to "true"', async () => {
    await expect('<div spellcheck />').toBeTransform(start + '_jsx("div",{spellcheck:"true"});');
  });

  it('should transform `spellcheck` value `true` to "true"', async () => {
    await expect('<div spellcheck={true} />').toBeTransform(start + '_jsx("div",{spellcheck:"true"});');
  });

  it('should transform `spellcheck` value `false` to "false"', async () => {
    await expect('<div spellcheck={false} />').toBeTransform(start + '_jsx("div",{spellcheck:"false"});');
  });

  it('should lower case `spellcheck` attribute name', async () => {
    await expect('<div spellCheck="false" />').toBeTransform(start + '_jsx("div",{spellcheck:"false"});');
  });

  it('should correct compiled string "true"', async () => {
    await expect('<div spellCheck="true" />').toBeTransform(start + '_jsx("div",{spellcheck:"true"});');
  });

  it('should correct compiled string "false"', async () => {
    await expect('<div spellCheck="false" />').toBeTransform(start + '_jsx("div",{spellcheck:"false"});');
  });
});
