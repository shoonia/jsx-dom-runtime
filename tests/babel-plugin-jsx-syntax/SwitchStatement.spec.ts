describe('babel-plugin-jsx-syntax: SwitchStatement', () => {
  it('should work with `switch`', async () => {
    await expect('switch (<App />) {};').toBeTransform('switch(App({})){};');
  });
});
