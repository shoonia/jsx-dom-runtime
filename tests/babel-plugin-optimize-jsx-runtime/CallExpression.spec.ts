import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: CallExpression', () => {
  it('should work with function', async () => {
    const result = await t('fn(<App />);');
    expect(result).toBe('fn(App({}));');
  });
});
