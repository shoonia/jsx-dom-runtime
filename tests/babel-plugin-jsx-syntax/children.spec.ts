describe('babel-plugin-jsx-syntax: Element', () => {
  it('should NOT have children', async () => {
    await expect('<App></App>;').toBeTransform('App({});');
  });

  it('should have one child number', async () => {
    await expect('<App>{1}</App>').toBeTransform('App({children:1});');
  });

  it('should have one child string', async () => {
    await expect('<App>1</App>').toBeTransform('App({children:"1"});');
  });

  it('should have three children', async () => {
    await expect('<App>{1} {2}</App>').toBeTransform('App({children:[1," ",2]});');
  });

  it('should return expression of JSXSpreadChild', async () => {
    await expect('<App>{...items}</App>').toBeTransform('App({children:items});');
  });

  it('should return expression of JSXSpreadChild on the start', async () => {
    await expect('<App>{...items} end</App>').toBeTransform('App({children:[items," end"]});');
  });

  it('should return expression of JSXSpreadChild on the end', async () => {
    await expect('<App>start {...items}</App>').toBeTransform('App({children:["start ",items]});');
  });

  it('should return expression of JSXSpreadChild between children', async () => {
    await expect('<App>start {...items} end</App>').toBeTransform('App({children:["start ",items," end"]});');
  });

  it('should return elemet with two JSXSpreadChild', async () => {
    await expect('<App>{...one}{...two}</App>').toBeTransform('App({children:[one,two]});');
  });

  it('should return elemet with array', async () => {
    await expect('<App>{[...a, ...b]}{...c}</App>').toBeTransform('App({children:[[...a,...b],c]});');
  });
});
