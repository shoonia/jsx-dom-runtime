import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: Element', () => {
  it('should inline FC', async () => {
    const result = await t('<div><App /></div>;');
    expect(result).toBe('<div>{App({})}</div>;');
  });

  it('should inline two FC', async () => {
    const result = await t('<p><App /><App /></p>;');
    expect(result).toBe('<p>{App({})}{App({})}</p>;');
  });

  it('should inline with attributes', async () => {
    const result = await t('<span><App key="value" /></span>;');
    expect(result).toBe('<span>{App({key:"value"})}</span>;');
  });

  it('should inline with two attributes', async () => {
    const result = await t('<span><App key="value" name="data" /></span>;');
    expect(result).toBe('<span>{App({key:"value",name:"data"})}</span>;');
  });

  it('should inline with attibute number literal', async () => {
    const result = await t('<div><App index={1} /></div>;');
    expect(result).toBe('<div>{App({index:1})}</div>;');
  });

  it('should inline with attibute string literal', async () => {
    const result = await t('<div><App index={"1"} /></div>;');
    expect(result).toBe('<div>{App({index:"1"})}</div>;');
  });

  it('should inline with attibute boolean (true) literal', async () => {
    const result = await t('<div><App index /></div>;');
    expect(result).toBe('<div>{App({index:true})}</div>;');
  });

  it('should inline with attibute boolean (false) literal', async () => {
    const result = await t('<div><App index={false} /></div>;');
    expect(result).toBe('<div>{App({index:false})}</div>;');
  });

  it('should inline with attibute array literal', async () => {
    const result = await t('<p><App list={[]} /></p>;');
    expect(result).toBe('<p>{App({list:[]})}</p>;');
  });

  it('should inline with attibute object literal', async () => {
    const result = await t('<p><App list={{}} /></p>;');
    expect(result).toBe('<p>{App({list:{}})}</p>;');
  });

  it('should inline with attibute regexp literal', async () => {
    const result = await t('<p><App param={/a-z/} /></p>;');
    expect(result).toBe('<p>{App({param:/a-z/})}</p>;');
  });

  it('should inline with attibute null literal', async () => {
    const result = await t('<p><App param={null} /></p>;');
    expect(result).toBe('<p>{App({param:null})}</p>;');
  });

  it('should inline with attibute undefined literal', async () => {
    const result = await t('<p><App param={undefined} /></p>;');
    expect(result).toBe('<p>{App({param:undefined})}</p>;');
  });

  it('should inline with attibute arrow function literal', async () => {
    const result = await t('<aside><App cd={() => {}} /></aside>;');
    expect(result).toBe('<aside>{App({cd:()=>{}})}</aside>;');
  });

  it('should inline with attibute function declaration literal', async () => {
    const result = await t('<aside><App cd={function() {}} /></aside>;');
    expect(result).toBe('<aside>{App({cd:function(){}})}</aside>;');
  });
});
