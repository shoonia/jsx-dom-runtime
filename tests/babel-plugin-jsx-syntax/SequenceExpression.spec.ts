describe('babel-plugin-jsx-syntax: SequenceExpression', () => {
  it('should work with ,', async () => {
    await expect('(<One />, <Two />);').toBeTransform('One({}),Two({});');
  });

  it('should work with , #2', async () => {
    await expect('(1, 2, <App />);').toBeTransform('1,2,App({});');
  });

  it('should work with , #3', async () => {
    await expect('([],<App />, {});').toBeTransform('[],App({}),{};');
  });

  it('should work inside function', async () => {
    await expect('let x = () => (0, <App />);').toBeTransform('let x=()=>(0,App({}));');
  });
});
