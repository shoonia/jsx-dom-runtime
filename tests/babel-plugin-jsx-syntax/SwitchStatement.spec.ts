import { t } from '../utils';

describe('babel-plugin-jsx-syntax: SwitchStatement', () => {
  it('should work with `switch`', async () => {
    const result = await t('switch (<App />) {};');
    expect(result).toBe('switch(App({})){};');
  });
});
