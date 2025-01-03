describe('Custom Element attributes', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty attribute to `true`', async () => {
    await expect('<my-element is-ready is:ready isReady />')
      .toBeTransform(i + '_jsx("my-element",{"is-ready":true,"is:ready":true,isReady:true});');
  });
});
