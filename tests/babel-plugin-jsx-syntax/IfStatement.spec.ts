describe('babel-plugin-jsx-syntax: IfStatement', () => {
  it('should work with `if`', async () => {
    await expect('if (<One />) <Two />;')
      .toBeTransform('if(One({}))Two({});');
  });

  it('should work with `else`', async () => {
    await expect('if (<App />) <App />; else <App />;')
      .toBeTransform('if(App({}))App({});else App({});');
  });

  it('should work with `else if`', async () => {
    await expect('if (<App />) <App />; else if(<App />) <App />;else <App />')
      .toBeTransform('if(App({}))App({});else if(App({}))App({});else App({});');
  });

  it('should work with `else if` #2', async () => {
    await expect('if (<App />) {} else if(<App />) {} else {}')
      .toBeTransform('if(App({})){}else if(App({})){}else{}');
  });
});
