describe('babel-plugin-jsx-syntax: CallExpression', () => {
  it('should work with function', async () => {
    await expect('fn(<App />);').toBeTransform('fn(App({}));');
  });

  it('should work with a few arguments', async () => {
    await expect('fn(<App />, 10, <Bob test />);').toBeTransform('fn(App({}),10,Bob({test:true}));');
  });
});
