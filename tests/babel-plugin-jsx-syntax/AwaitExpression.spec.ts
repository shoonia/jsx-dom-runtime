describe('babel-plugin-jsx-syntax: AwaitExpression', () => {
  it('should work with await', async () => {
    await expect('await <App />;').toBeTransform('await App({});');
  });

  it('should work with await #2', async () => {
    await expect('await await <App />;').toBeTransform('await await App({});');
  });
});
