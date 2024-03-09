describe('Babel transform aria-* attributes', () => {
  const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty `aria-*` attribute to "true"', async () => {
    await expect('<div aria-hidden />').toBeTransform(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should transform `aria-*` attribute value `true` to "true"', async () => {
    await expect('<div aria-hidden={true} />').toBeTransform(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should transform `aria-*` attribute value `false` to "false"', async () => {
    await expect('<div aria-hidden={false} />').toBeTransform(_jsx + '_jsx("div",{"aria-hidden":"false"});');
  });

  it('should correct compiled string "true"', async () => {
    await expect('<div aria-hidden="true" />').toBeTransform(_jsx + '_jsx("div",{"aria-hidden":"true"});');
  });

  it('should correct compiled string "false"', async () => {
    await expect('<div aria-hidden="false" />').toBeTransform(_jsx + '_jsx("div",{"aria-hidden":"false"});');
  });
});
