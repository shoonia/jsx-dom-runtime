describe('babel-plugin-jsx-syntax: ClassPrivateProperty', () => {
  it('should work with private property #', async () => {
    await expect('class A { #key = <App /> }').toBeTransform('class A{#key=App({})}');
  });
});
