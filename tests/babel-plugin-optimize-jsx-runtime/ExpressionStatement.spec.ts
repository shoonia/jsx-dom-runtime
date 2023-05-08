import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: ExpressionStatement', () => {
  it('should work as expression', async () => {
    const result = await t('<App />;');
    expect(result).toBe('App({});');
  });

  it('should work as expression in line', async () => {
    const result = await t('<App />;<Two />');
    expect(result).toBe('App({});Two({});');
  });

  it('should work in block', async () => {
    const result = await t('{ <App />; };');
    expect(result).toBe('{App({})};');
  });

  it('should work a few components in block', async () => {
    const result = await t('{ <App />; <Two />; };');
    expect(result).toBe('{App({});Two({})};');
  });
});
