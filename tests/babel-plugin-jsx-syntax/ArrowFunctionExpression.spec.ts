describe('babel-plugin-jsx-syntax: ArrowFunctionExpression', () => {
  it('should work with ArrowFunctionExpression', async () => {
    await expect('let fn = () => <App />;').toBeTransform('let fn=()=>App({});');
  });

  it('should work with ArrowFunctionExpression `()`', async () => {
    await expect('let fn = () => (<App />);').toBeTransform('let fn=()=>App({});');
  });

  it('should work with IIFE ArrowFunctionExpression', async () => {
    await expect('(() => <App />)();').toBeTransform('(()=>App({}))();');
  });

  it('should work with ArrowFunctionExpression in ObjectMethod', async () => {
    await expect('let x = { a: () => <App /> };').toBeTransform('let x={a:()=>App({})};');
  });
});
