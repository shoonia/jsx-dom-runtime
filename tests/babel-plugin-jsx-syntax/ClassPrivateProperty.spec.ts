import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ClassPrivateProperty', () => {
  it('should work with private property #', async () => {
    const result = await t('class A { #key = <App /> }');
    expect(result).toBe('class A{#key=App({})}');
  });
});
