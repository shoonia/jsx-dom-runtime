describe('Babel transform data-* attributes', () => {
  const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty `data-*` attribute to "true"', async () => {
    await expect('<div data-hidden />').toBeTransform(start + '_jsx("div",{"data-hidden":"true"});');
  });

  it('should transform `data-*` attribute value `true` to "true"', async () => {
    await expect('<div data-hidden={true} />').toBeTransform(start + '_jsx("div",{"data-hidden":"true"});');
  });

  it('should transform `data-*` attribute value `false` to "false"', async () => {
    await expect('<div data-hidden={false} />').toBeTransform(start + '_jsx("div",{"data-hidden":"false"});');
  });

  it('should correct compiled string "true"', async () => {
    await expect('<div data-hidden="true" />').toBeTransform(start + '_jsx("div",{"data-hidden":"true"});');
  });

  it('should correct compiled string "false"', async () => {
    await expect('<div data-hidden="false" />').toBeTransform(start + '_jsx("div",{"data-hidden":"false"});');
  });
});
