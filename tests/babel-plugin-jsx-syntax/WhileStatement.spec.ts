describe('babel-plugin-jsx-syntax: WhileStatement', () => {
  it('should work with `while` loop', async () => {
    await expect('while(<App />) {};').toBeTransform('while(App({})){};');
  });
});
