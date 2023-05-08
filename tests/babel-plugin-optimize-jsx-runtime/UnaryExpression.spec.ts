import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: UnaryExpression', () => {
  it('should work with void', async () => {
    const result = await t('void <App />;');
    expect(result).toBe('void App({});');
  });

  it('should work with +', async () => {
    const result = await t('+ <App />;');
    expect(result).toBe('+App({});');
  });

  it('should work with -', async () => {
    const result = await t('- <App />;');
    expect(result).toBe('-App({});');
  });

  it('should work with !', async () => {
    const result = await t('! <App />;');
    expect(result).toBe('!App({});');
  });
});
