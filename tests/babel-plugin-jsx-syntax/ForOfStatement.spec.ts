import { t } from './transform';

describe('babel-plugin-jsx-syntax: ForOfStatement', () => {
  it('should work with `for of` loop', async () => {
    const result = await t('for (let key of <App />) {};');
    expect(result).toBe('for(let key of App({})){};');
  });

  it('should work with `for await of` loop', async () => {
    const result = await t('for await (let key of <App />) {};');
    expect(result).toBe('for await(let key of App({})){};');
  });
});
