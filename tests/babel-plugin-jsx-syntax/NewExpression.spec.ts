import { t } from '../utils';

describe('babel-plugin-jsx-syntax: NewExpression', () => {
  it('should work with `new`', async () => {
    const result = await t('new <App />;');
    expect(result).toBe('new(App({}));');
  });
});
