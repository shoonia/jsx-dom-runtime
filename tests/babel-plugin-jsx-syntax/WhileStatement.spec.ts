describe('babel-plugin-jsx-syntax: WhileStatement', () => {
  it('should work with `while` loop', async () => {
    await expect('while(<App />) {};').toBeTransform('while(App({})){};');
  });

  it('should work with `while` loop body', async () => {
    await expect('while(true) <App />;').toBeTransform('while(true)App({});');
  });
});
