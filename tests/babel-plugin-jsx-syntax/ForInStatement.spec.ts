describe('babel-plugin-jsx-syntax: ForInStatement', () => {
  it('should work with `for in` loop', async () => {
    await expect('for(let key in App({})){};').toBeTransform('for(let key in App({})){};');
  });
});
