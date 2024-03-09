describe('babel-plugin-jsx-syntax: JSXExpressionContainer', () => {
  it('should work in JSX attribute value', async () => {
    await expect('<div children={<Box/>} />;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{children:Box({})});');
  });

  it('should work in JSX attribute value #2', async () => {
    await expect('<App children={<Box/>} />;').toBeTransform('App({children:Box({})});');
  });

  it('should work in JSX attribute value #3', async () => {
    await expect('<App items={<Box>hello</Box>} />;').toBeTransform('App({items:Box({children:"hello"})});');
  });

  it('should work in JSX attribute value #4', async () => {
    await expect('<App items={<Box><Item /></Box>} />;').toBeTransform('App({items:Box({children:Item({})})});');
  });

  it('should work in JSX attribute value #5', async () => {
    await expect('<App items={<Box><Item elem={<Elem />} /></Box>} />;')
      .toBeTransform('App({items:Box({children:Item({elem:Elem({})})})});');
  });
});
