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

  it('should inline with children', async () => {
    const result = await t('<><App>hello</App></>;');
    expect(result).toBe('<>{App({children:"hello"})}</>;');
  });

  it('should inline with attributes & children', async () => {
    const result = await t('<><App key="value">hello</App></>;');
    expect(result).toBe('<>{App({key:"value",children:"hello"})}</>;');
  });
});
