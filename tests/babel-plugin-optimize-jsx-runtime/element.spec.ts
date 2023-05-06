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
});
