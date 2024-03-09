describe('babel-plugin-jsx-syntax: YieldExpression', () => {
  it('should work with yield', async () => {
    await expect('function* x(){ yield <App />; };').toBeTransform('function*x(){yield App({})};');
  });

  it('should work with yield #2', async () => {
    await expect('function* x(){ yield yield <App />; };').toBeTransform('function*x(){yield yield App({})};');
  });

  it('should work with `yield*`', async () => {
    await expect('function* x(){ yield* <App />; };').toBeTransform('function*x(){yield*App({})};');
  });
});
