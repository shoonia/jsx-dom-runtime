describe('babel-plugin-jsx-syntax: ReturnStatement', () => {
  it('should work with ArrowFunctionExpression', async () => {
    await expect('let fn = () => { return <App />};').toBeTransform('let fn=()=>{return App({})};');
  });

  it('should work with async ArrowFunctionExpression', async () => {
    await expect('let fn = async () => { return <App />};').toBeTransform('let fn=async()=>{return App({})};');
  });

  it('should work with FunctionDeclaration', async () => {
    await expect('function x() { return <App />};').toBeTransform('function x(){return App({})};');
  });

  it('should work with async FunctionDeclaration', async () => {
    await expect('async function x() { return <App />};').toBeTransform('async function x(){return App({})};');
  });

  it('should work with generator FunctionDeclaration', async () => {
    await expect('function*x() { return <App />};').toBeTransform('function*x(){return App({})};');
  });

  it('should work with async generator FunctionDeclaration', async () => {
    await expect('async function*x() { return <App />};').toBeTransform('async function*x(){return App({})};');
  });

  it('should work with ObjectMethod', async () => {
    await expect('let x={a(){return <App />}};').toBeTransform('let x={a(){return App({})}};');
  });

  it('should work with async ObjectMethod', async () => {
    await expect('let x={async a(){return <App />}};').toBeTransform('let x={async a(){return App({})}};');
  });

  it('should work with generator ObjectMethod', async () => {
    await expect('let x={*a(){return <App />}};').toBeTransform('let x={*a(){return App({})}};');
  });

  it('should work with arrow ObjectMethod', async () => {
    await expect('let x={a:()=>{return <App />}};').toBeTransform('let x={a:()=>{return App({})}};');
  });

  it('should work with arrow async ObjectMethod', async () => {
    await expect('let x={ a: async () => { return <App />}};').toBeTransform('let x={a:async()=>{return App({})}};');
  });
});
