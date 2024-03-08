describe('babel-plugin-jsx-syntax: NewExpression', () => {
  it('should work with `new`', async () => {
    await expect('new <App />;').toBeTransform('new(App({}));');
  });
});
