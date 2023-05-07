import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: attributes', () => {
  it('should work with attribute namespace', async () => {
    const result = await t('<><App x:id="hello"/></>;');
    expect(result).toBe('<>{App({"x:id":"hello"})}</>;');
  });

  it('should work with dashes attributes', async () => {
    const result = await t('<><App x-id="hello"/></>;');
    expect(result).toBe('<>{App({"x-id":"hello"})}</>;');
  });
});
