const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('babel-plugin-jsx-syntax: Element', () => {
  it('should inline FC', async () => {
    await expect('<div><App /></div>;')
      .toBeTransform(start + '_jsx("div",{children:App({})});');
  });

  it('should inline two FC', async () => {
    await expect('<p><App /><App /></p>;')
      .toBeTransform(start + '_jsx("p",{children:[App({}),App({})]});');
  });

  it('should inline with attributes', async () => {
    await expect('<span><App key="value" /></span>;')
      .toBeTransform(start + '_jsx("span",{children:App({key:"value"})});');
  });

  it('should inline with two attributes', async () => {
    await expect('<span><App key="value" name="data" /></span>;')
      .toBeTransform(start + '_jsx("span",{children:App({key:"value",name:"data"})});');
  });

  it('should inline with attibute number literal', async () => {
    await expect('<div><App index={1} /></div>;')
      .toBeTransform(start + '_jsx("div",{children:App({index:1})});');
  });

  it('should inline with attibute string literal', async () => {
    await expect('<div><App index={"1"} /></div>;')
      .toBeTransform(start + '_jsx("div",{children:App({index:"1"})});');
  });

  it('should inline with attibute boolean (true) literal', async () => {
    await expect('<div><App index /></div>;')
      .toBeTransform(start + '_jsx("div",{children:App({index:true})});');
  });

  it('should inline with attibute boolean (false) literal', async () => {
    await expect('<div><App index={false} /></div>;')
      .toBeTransform(start + '_jsx("div",{children:App({index:false})});');
  });

  it('should inline with attibute array literal', async () => {
    await expect('<p><App list={[]} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({list:[]})});');
  });

  it('should inline with attibute object literal', async () => {
    await expect('<p><App list={{}} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({list:{}})});');
  });

  it('should inline with attibute regexp literal', async () => {
    await expect('<p><App param={/a-z/} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({param:/a-z/})});');
  });

  it('should inline with attibute null literal', async () => {
    await expect('<p><App param={null} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({param:null})});');
  });

  it('should inline with attibute undefined literal', async () => {
    await expect('<p><App param={undefined} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({param:undefined})});');
  });

  it('should inline with attibute arrow function literal', async () => {
    await expect('<p><App cd={() => {}} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({cd:()=>{}})});');
  });

  it('should inline with attibute function declaration literal', async () => {
    await expect('<p><App cd={function() {}} /></p>;')
      .toBeTransform(start + '_jsx("p",{children:App({cd:function(){}})});');
  });
});
