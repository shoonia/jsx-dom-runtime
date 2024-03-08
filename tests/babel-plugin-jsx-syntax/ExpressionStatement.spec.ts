describe('babel-plugin-jsx-syntax: ExpressionStatement', () => {
  it('should work as expression', async () => {
    await expect('<App />;').toBeTransform('App({});');
  });

  it('should work as expression in line', async () => {
    await expect('<App />;<Two />').toBeTransform('App({});Two({});');
  });

  it('should work in block', async () => {
    await expect('{ <App />; };').toBeTransform('{App({})};');
  });

  it('should work a few components in block', async () => {
    await expect('{ <App />; <Two />; };').toBeTransform('{App({});Two({})};');
  });

  it('should work LabeledStatement', async () => {
    await expect('name: <App />;').toBeTransform('name:App({});');
  });

  it('should work DebuggerStatement', async () => {
    await expect('debugger; <App />;').toBeTransform('debugger;App({});');
  });
});
