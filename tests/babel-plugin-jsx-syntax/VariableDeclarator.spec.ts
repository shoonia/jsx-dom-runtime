import { t } from '../utils';

describe('babel-plugin-jsx-syntax: VariableDeclarator', () => {
  it('should work with `let`', async () => {
    const result = await t('let x = <App />;');
    expect(result).toBe('let x=App({});');
  });

  it('should work with `const`', async () => {
    const result = await t('const x = <App />;');
    expect(result).toBe('const x=App({});');
  });

  it('should work with `var`', async () => {
    const result = await t('var x = <App />;');
    expect(result).toBe('var x=App({});');
  });

  it('should work with pair declarators', async () => {
    const result = await t('let x = <App />, y = <Box />;');
    expect(result).toBe('let x=App({}),y=Box({});');
  });
});
