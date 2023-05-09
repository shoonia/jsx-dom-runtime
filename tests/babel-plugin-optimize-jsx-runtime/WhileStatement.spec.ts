import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: WhileStatement', () => {
  it('should work with `while` loop', async () => {
    const result = await t('while(<App />) {};');
    expect(result).toBe('while(App({})){};');
  });
});
