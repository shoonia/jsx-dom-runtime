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
});
