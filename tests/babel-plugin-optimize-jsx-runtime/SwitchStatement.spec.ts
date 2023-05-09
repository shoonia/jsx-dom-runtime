import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: SwitchStatement', () => {
  it('should work with `switch`', async () => {
    const result = await t('switch (<App />) {};');
    expect(result).toBe('switch(App({})){};');
  });
});
