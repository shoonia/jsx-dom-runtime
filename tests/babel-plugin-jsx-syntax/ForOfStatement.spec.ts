describe('babel-plugin-jsx-syntax: ForOfStatement', () => {
  it('should work with `for of` loop', async () => {
    await expect('for (let key of <App />) {};').toBeTransform('for(let key of App({})){};');
  });

  it('should work with `for await of` loop', async () => {
    await expect('for await (let key of <App />) {};').toBeTransform('for await(let key of App({})){};');
  });

  it('should work with `for await of` in loop body', async () => {
    await expect('for await (let key of <App />) <App />;').toBeTransform('for await(let key of App({}))App({});');
  });
});
