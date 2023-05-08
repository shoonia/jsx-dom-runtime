import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: AssignmentExpression', () => {
  it('should work with one assignment', async () => {
    const result = await t('x = <App />;');
    expect(result).toBe('x=App({});');
  });

  it('should work with a few assignments', async () => {
    const result = await t('x = <App />, y = <Box />;');
    expect(result).toBe('x=App({}),y=Box({});');
  });
});
