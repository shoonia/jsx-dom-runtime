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
});
