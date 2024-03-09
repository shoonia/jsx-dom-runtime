describe('babel-plugin-jsx-syntax: AssignmentPattern', () => {
  it('should work with default parameters', async () => {
    await expect('let {x = <App />} = data;').toBeTransform('let{x=App({})}=data;');
  });

  it('should work with function declaration', async () => {
    await expect('function x(a = <App />) {};').toBeTransform('function x(a=App({})){};');
  });

  it('should work with arrow function', async () => {
    await expect('let x = (a = <App />) => {};').toBeTransform('let x=(a=App({}))=>{};');
  });

  it('should work with arrow function #2', async () => {
    await expect('let x = (a, b = <App />) => {};').toBeTransform('let x=(a,b=App({}))=>{};');
  });
});
