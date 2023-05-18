import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ForInStatement', () => {
  it('should work with `for in` loop', async () => {
    const result = await t('for (let key in <App />) {};');
    expect(result).toBe('for(let key in App({})){};');
  });
});
