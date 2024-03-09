describe('babel-plugin-jsx-syntax: SwitchCase', () => {
  it('should work with `case`', async () => {
    await expect('switch (1) { case <App />: { } };').toBeTransform('switch(1){case App({}):{}};');
  });

  it('should work with `defalut`', async () => {
    await expect('switch (1) { case <App />: {} defalut: <App /> };').toBeTransform('switch(1){case App({}):{}defalut:App({})};');
  });
});
