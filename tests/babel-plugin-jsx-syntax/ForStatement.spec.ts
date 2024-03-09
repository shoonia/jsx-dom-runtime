describe('babel-plugin-jsx-syntax: ForStatement', () => {
  it('should work with `for` loop, init', async () => {
    await expect('for (<App />; ;) {};').toBeTransform('for(App({});;){};');
  });

  it('should work with `for` loop, test', async () => {
    await expect('for (;<App />;) {};').toBeTransform('for(;App({});){};');
  });

  it('should work with `for` loop, update', async () => {
    await expect('for (; ;<App />) {};').toBeTransform('for(;;App({})){};');
  });

  it('should work with `for` loop, all', async () => {
    await expect('for (<Init />; <Test />; <Update />) {};')
      .toBeTransform('for(Init({});Test({});Update({})){};');
  });

  it('should work with `for` loop body', async () => {
    await expect('for (; ;) <App />;').toBeTransform('for(;;)App({});');
  });
});
