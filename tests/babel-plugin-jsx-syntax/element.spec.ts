import { t } from './transform';

const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('babel-plugin-jsx-syntax: Element', () => {
  it('should inline FC', async () => {
    const result = await t('<div><App /></div>;');
    expect(result).toBe(start + '_jsx("div",{children:App({})});');
  });

  it('should inline two FC', async () => {
    const result = await t('<p><App /><App /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:[App({}),App({})]});');
  });

  it('should inline with attributes', async () => {
    const result = await t('<span><App key="value" /></span>;');
    expect(result).toBe(start + '_jsx("span",{children:App({key:"value"})});');
  });

  it('should inline with two attributes', async () => {
    const result = await t('<span><App key="value" name="data" /></span>;');
    expect(result).toBe(start + '_jsx("span",{children:App({key:"value",name:"data"})});');
  });

  it('should inline with attibute number literal', async () => {
    const result = await t('<div><App index={1} /></div>;');
    expect(result).toBe(start + '_jsx("div",{children:App({index:1})});');
  });

  it('should inline with attibute string literal', async () => {
    const result = await t('<div><App index={"1"} /></div>;');
    expect(result).toBe(start + '_jsx("div",{children:App({index:"1"})});');
  });

  it('should inline with attibute boolean (true) literal', async () => {
    const result = await t('<div><App index /></div>;');
    expect(result).toBe(start + '_jsx("div",{children:App({index:true})});');
  });

  it('should inline with attibute boolean (false) literal', async () => {
    const result = await t('<div><App index={false} /></div>;');
    expect(result).toBe(start + '_jsx("div",{children:App({index:false})});');
  });

  it('should inline with attibute array literal', async () => {
    const result = await t('<p><App list={[]} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({list:[]})});');
  });

  it('should inline with attibute object literal', async () => {
    const result = await t('<p><App list={{}} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({list:{}})});');
  });

  it('should inline with attibute regexp literal', async () => {
    const result = await t('<p><App param={/a-z/} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({param:/a-z/})});');
  });

  it('should inline with attibute null literal', async () => {
    const result = await t('<p><App param={null} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({param:null})});');
  });

  it('should inline with attibute undefined literal', async () => {
    const result = await t('<p><App param={undefined} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({param:undefined})});');
  });

  it('should inline with attibute arrow function literal', async () => {
    const result = await t('<p><App cd={() => {}} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({cd:()=>{}})});');
  });

  it('should inline with attibute function declaration literal', async () => {
    const result = await t('<p><App cd={function() {}} /></p>;');
    expect(result).toBe(start + '_jsx("p",{children:App({cd:function(){}})});');
  });
});
