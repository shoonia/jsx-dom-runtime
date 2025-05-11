describe('babel-plugin-jsx-syntax: ConditionalExpression', () => {
  it('should work with consequent', async () => {
    await expect('true ? <App /> : null;').toBeTransform('true?App({}):null;');
  });

  it('should work with alternate', async () => {
    await expect('false ? null : <App />;').toBeTransform('false?null:App({});');
  });

  it('should work with all', async () => {
    await expect('<One /> ? <Two /> : <Three />;').toBeTransform('One({})?Two({}):Three({});');
  });

  it('should work with children', async () => {
    await expect('<One /> ? <Two /> : <Three><p>hello</p></Three>;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";One({})?Two({}):Three({children:/*#__PURE__*/_jsx("p",{},"hello")});');
  });

  it('should work with children #2', async () => {
    await expect('<One /> ? <Two /> : <Three><p>hello</p><p>world</p></Three>;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";One({})?Two({}):Three({children:[/*#__PURE__*/_jsx("p",{},"hello"),/*#__PURE__*/_jsx("p",{},"world")]});');
  });
});
