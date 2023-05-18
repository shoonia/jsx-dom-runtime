import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ClassProperty', () => {
  it('should work with class property', async () => {
    const result = await t('class A { key = <App /> }');
    expect(result).toBe('class A{key=App({})}');
  });

  it('should work with class `static` property', async () => {
    const result = await t('class A { static key = <App /> }');
    expect(result).toBe('class A{static key=App({})}');
  });
});
