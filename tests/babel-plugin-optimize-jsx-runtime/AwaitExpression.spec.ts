import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: AwaitExpression', () => {
  it('should work with await', async () => {
    const result = await t('await <App />;');
    expect(result).toBe('await App({});');
  });

  it('should work with await #2', async () => {
    const result = await t('await await <App />;');
    expect(result).toBe('await await App({});');
  });
});
