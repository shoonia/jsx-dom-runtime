import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: NewExpression', () => {
  it('should work with `new`', async () => {
    const result = await t('new <App />;');
    expect(result).toBe('new(App({}));');
  });
});
