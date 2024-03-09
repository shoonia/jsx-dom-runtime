describe('babel-plugin-jsx-syntax: ClassProperty', () => {
  it('should work with class property', async () => {
    await expect('class A { key = <App /> }').toBeTransform('class A{key=App({})}');
  });

  it('should work with class `static` property', async () => {
    await expect('class A { static key = <App /> }').toBeTransform('class A{static key=App({})}');
  });
});
