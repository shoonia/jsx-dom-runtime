describe('babel-plugin-jsx-syntax: ArrayExpression', () => {
  it('should work with array', async () => {
    await expect('[<App />];').toBeTransform('[App({})];');
  });

  it('should work with a few items', async () => {
    await expect('[<App />, <Box />];').toBeTransform('[App({}),Box({})];');
  });

  it('should have right index position', async () => {
    await expect('[1, <App />, 3, 4];').toBeTransform('[1,App({}),3,4];');
  });

  it('should have right index position with children', async () => {
    await expect('[1, <App>1</App>, 3, 4];').toBeTransform('[1,App({children:"1"}),3,4];');
  });

  it('should have right index position with children #2', async () => {
    await expect(
      '[1, <App><div/></App>, 3, 4];'
    ).toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";[1,App({children:/*#__PURE__*/_jsx("div",{})}),3,4];'
    );
  });
});
