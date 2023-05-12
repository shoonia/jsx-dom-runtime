import { t } from './transform';

describe('babel-plugin-jsx-syntax: YieldExpression', () => {
  it('should work with yield', async () => {
    const result = await t('function* x(){ yield <App />; };');
    expect(result).toBe('function*x(){yield App({})};');
  });

  it('should work with yield #2', async () => {
    const result = await t('function* x(){ yield yield <App />; };');
    expect(result).toBe('function*x(){yield yield App({})};');
  });

  it('should work with `yield*`', async () => {
    const result = await t('function* x(){ yield* <App />; };');
    expect(result).toBe('function*x(){yield*App({})};');
  });
});
