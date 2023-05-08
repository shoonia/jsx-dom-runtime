import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: ConditionalExpression', () => {
  it('should work with consequent', async () => {
    const result = await t('true ? <App /> : null;');
    expect(result).toBe('true?App({}):null;');
  });

  it('should work with alternate', async () => {
    const result = await t('false ? null : <App />;');
    expect(result).toBe('false?null:App({});');
  });

  it('should work with all', async () => {
    const result = await t('<One /> ? <Two /> : <Three />;');
    expect(result).toBe('One({})?Two({}):Three({});');
  });
});
