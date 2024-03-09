describe('babel-plugin-jsx-syntax: VariableDeclarator', () => {
  it('should work with `let`', async () => {
    await expect('let x = <App />;').toBeTransform('let x=App({});');
  });

  it('should work with `const`', async () => {
    await expect('const x = <App />;').toBeTransform('const x=App({});');
  });

  it('should work with `var`', async () => {
    await expect('var x = <App />;').toBeTransform('var x=App({});');
  });

  it('should work with pair declarators', async () => {
    await expect('let x = <App />, y = <Box />;').toBeTransform('let x=App({}),y=Box({});');
  });
});
