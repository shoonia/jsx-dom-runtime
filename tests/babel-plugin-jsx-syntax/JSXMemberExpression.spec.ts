describe('babel-plugin-jsx-syntax: JSXMemberExpression', () => {
  it('should work with object methods', async () => {
    await expect('<App.UpperCase id="hello" />;').toBeTransform('App.UpperCase({id:"hello"});');
  });

  it('should work with object methods #2', async () => {
    await expect('<App.lowerCase id="hello" />;').toBeTransform('App.lowerCase({id:"hello"});');
  });

  it('should work with object methods #3', async () => {
    await expect('<App._snake_case_ id="hello" />;').toBeTransform('App._snake_case_({id:"hello"});');
  });

  it('should work with chain of properties', async () => {
    await expect('<App.one.two.three id="hello" />;').toBeTransform('App.one.two.three({id:"hello"});');
  });
});
