describe('JSX DOM Events', () => {
  it('should not throw an error for invalid event listener values', async () => {
    await expect('<div on:click />')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{"on:click":true});');
  });
});
