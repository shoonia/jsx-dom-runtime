import { t } from '../utils';

describe('babel-plugin-jsx-syntax: AwaitExpression', () => {
  it('should work with await', async () => {
    const result = await t('await <App />;');
    expect(result).toBe('await App({});');
  });

  it('should work with await #2', async () => {
    const result = await t('await await <App />;');
    expect(result).toBe('await await App({});');
  });
});
