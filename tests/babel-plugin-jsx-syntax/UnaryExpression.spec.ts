describe('babel-plugin-jsx-syntax: UnaryExpression', () => {
  it('should work with throw', async () => {
    await expect('void <App />;').toBeTransform('void App({});');
  });

  it('should work with throw', async () => {
    await expect('throw <App />;').toBeTransform('throw App({});');
  });

  it('should work with delete', async () => {
    await expect('delete <App />;').toBeTransform('delete App({});');
  });

  it('should work with `typeof`', async () => {
    await expect('typeof <App />;').toBeTransform('typeof App({});');
  });

  it('should work with +', async () => {
    await expect('+ <App />;').toBeTransform('+App({});');
  });

  it('should work with -', async () => {
    await expect('- <App />;').toBeTransform('-App({});');
  });

  it('should work with !', async () => {
    await expect('! <App />;').toBeTransform('!App({});');
  });

  it('should work with ~', async () => {
    await expect('~ <App />;').toBeTransform('~App({});');
  });
});
