import { t } from './transform';

describe('babel-plugin-jsx-syntax: TemplateLiteral', () => {
  it('should work with `${}`', async () => {
    const result = await t('`${ <App /> }`;');
    expect(result).toBe('`${App({})}`;');
  });

  it('should work with `${}` #2', async () => {
    const result = await t('`Start - ${ <App /> } - End`;');
    expect(result).toBe('`Start - ${App({})} - End`;');
  });
});
