import { t } from './transform';

describe('babel-plugin-jsx-syntax: UnaryExpression', () => {
  it('should work with void', async () => {
    const result = await t('void <App />;');
    expect(result).toBe('void App({});');
  });

  it('should work with delete', async () => {
    const result = await t('delete <App />;');
    expect(result).toBe('delete App({});');
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

  it('should work with ~', async () => {
    const result = await t('~ <App />;');
    expect(result).toBe('~App({});');
  });

  it('should work with `typeof`', async () => {
    const result = await t('typeof <App />;');
    expect(result).toBe('typeof App({});');
  });
});
