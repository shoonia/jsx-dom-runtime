describe('babel-plugin-jsx-syntax: DoWhileStatement', () => {
  it('should work with `do while` loop', async () => {
    await expect('do { <App /> } while (true);').toBeTransform('do{App({})}while(true);');
  });

  it('should work with `do while` test', async () => {
    await expect('do {} while (<App />);').toBeTransform('do{}while(App({}));');
  });
});
