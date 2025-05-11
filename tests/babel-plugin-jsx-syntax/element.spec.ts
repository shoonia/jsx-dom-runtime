import { jsxImport } from '../utils';

describe('babel-plugin-jsx-syntax: Element', () => {
  it('should inline FC', async () => {
    await expect('<div><App /></div>;')
      .toBeTransform(jsxImport`_jsx("div",{},App({}));`);
  });

  it('should inline two FC', async () => {
    await expect('<p><App /><App /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},[App({}),App({})]);`);
  });

  it('should inline with attributes', async () => {
    await expect('<span><App key="value" /></span>;')
      .toBeTransform(jsxImport`_jsx("span",{},App({key:"value"}));`);
  });

  it('should inline with two attributes', async () => {
    await expect('<span><App key="value" name="data" /></span>;')
      .toBeTransform(jsxImport`_jsx("span",{},App({key:"value",name:"data"}));`);
  });

  it('should inline with attibute number literal', async () => {
    await expect('<div><App index={1} /></div>;')
      .toBeTransform(jsxImport`_jsx("div",{},App({index:1}));`);
  });

  it('should inline with attibute string literal', async () => {
    await expect('<div><App index={"1"} /></div>;')
      .toBeTransform(jsxImport`_jsx("div",{},App({index:"1"}));`);
  });

  it('should inline with attibute boolean (true) literal', async () => {
    await expect('<div><App index /></div>;')
      .toBeTransform(jsxImport`_jsx("div",{},App({index:true}));`);
  });

  it('should inline with attibute boolean (false) literal', async () => {
    await expect('<div><App index={false} /></div>;')
      .toBeTransform(jsxImport`_jsx("div",{},App({index:false}));`);
  });

  it('should inline with attibute array literal', async () => {
    await expect('<p><App list={[]} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({list:[]}));`);
  });

  it('should inline with attibute object literal', async () => {
    await expect('<p><App list={{}} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({list:{}}));`);
  });

  it('should inline with attibute regexp literal', async () => {
    await expect('<p><App param={/a-z/} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({param:/a-z/}));`);
  });

  it('should inline with attibute null literal', async () => {
    await expect('<p><App param={null} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({param:null}));`);
  });

  it('should inline with attibute undefined literal', async () => {
    await expect('<p><App param={undefined} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({param:undefined}));`);
  });

  it('should inline with attibute arrow function literal', async () => {
    await expect('<p><App cd={() => {}} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({cd:()=>{}}));`);
  });

  it('should inline with attibute function declaration literal', async () => {
    await expect('<p><App cd={function() {}} /></p>;')
      .toBeTransform(jsxImport`_jsx("p",{},App({cd:function(){}}));`);
  });
});
