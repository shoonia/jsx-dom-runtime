describe('babel-plugin-jsx-syntax: TemplateLiteral', () => {
  it('should work with `${}`', async () => {
    await expect('`${ <App /> }`;').toBeTransform('`${App({})}`;');
  });

  it('should work with `${}` #2', async () => {
    await expect('`Start - ${ <App /> } - End`;').toBeTransform('`Start - ${App({})} - End`;');
  });
});
