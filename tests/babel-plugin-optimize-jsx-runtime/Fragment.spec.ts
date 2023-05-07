import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: Frament', () => {
  it('should inline FC', async () => {
    const result = await t('<><App /></>;');
    expect(result).toBe('<>{App({})}</>;');
  });

  it('should inline two FC', async () => {
    const result = await t('<><App /><App /></>;');
    expect(result).toBe('<>{App({})}{App({})}</>;');
  });

  it('should inline with attributes', async () => {
    const result = await t('<><App key="value" /></>;');
    expect(result).toBe('<>{App({key:"value"})}</>;');
  });

  it('should inline with two attributes', async () => {
    const result = await t('<><App key="value" name="data" /></>;');
    expect(result).toBe('<>{App({key:"value",name:"data"})}</>;');
  });

  it('should inline with attibute number literal', async () => {
    const result = await t('<><App index={1} /></>;');
    expect(result).toBe('<>{App({index:1})}</>;');
  });

  it('should inline with attibute string literal', async () => {
    const result = await t('<><App index={"1"} /></>;');
    expect(result).toBe('<>{App({index:"1"})}</>;');
  });

  it('should inline with attibute boolean (true) literal', async () => {
    const result = await t('<><App index /></>;');
    expect(result).toBe('<>{App({index:true})}</>;');
  });

  it('should inline with attibute boolean (false) literal', async () => {
    const result = await t('<><App index={false} /></>;');
    expect(result).toBe('<>{App({index:false})}</>;');
  });

  it('should inline with attibute array literal', async () => {
    const result = await t('<><App list={[]} /></>;');
    expect(result).toBe('<>{App({list:[]})}</>;');
  });

  it('should inline with attibute object literal', async () => {
    const result = await t('<><App list={{}} /></>;');
    expect(result).toBe('<>{App({list:{}})}</>;');
  });

  it('should inline with attibute regexp literal', async () => {
    const result = await t('<><App param={/a-z/} /></>;');
    expect(result).toBe('<>{App({param:/a-z/})}</>;');
  });

  it('should inline with attibute null literal', async () => {
    const result = await t('<><App param={null} /></>;');
    expect(result).toBe('<>{App({param:null})}</>;');
  });

  it('should inline with attibute undefined literal', async () => {
    const result = await t('<><App param={undefined} /></>;');
    expect(result).toBe('<>{App({param:undefined})}</>;');
  });

  it('should inline with attibute arrow function literal', async () => {
    const result = await t('<><App cd={() => {}} /></>;');
    expect(result).toBe('<>{App({cd:()=>{}})}</>;');
  });

  it('should inline with attibute function declaration literal', async () => {
    const result = await t('<><App cd={function() {}} /></>;');
    expect(result).toBe('<>{App({cd:function(){}})}</>;');
  });
});
