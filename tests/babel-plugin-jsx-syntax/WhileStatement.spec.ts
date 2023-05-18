import { t } from '../utils';

describe('babel-plugin-jsx-syntax: WhileStatement', () => {
  it('should work with `while` loop', async () => {
    const result = await t('while(<App />) {};');
    expect(result).toBe('while(App({})){};');
  });
});
