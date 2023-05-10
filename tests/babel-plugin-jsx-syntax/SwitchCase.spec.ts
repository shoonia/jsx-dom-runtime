import { t } from './transform';

describe('babel-plugin-jsx-syntax: SwitchCase', () => {
  it('should work with `case`', async () => {
    const result = await t('switch (1) { case <App />: { } };');
    expect(result).toBe('switch(1){case App({}):{}};');
  });

  it('should work with `defalut`', async () => {
    const result = await t('switch (1) { case <App />: {} defalut: <App /> };');
    expect(result).toBe('switch(1){case App({}):{}defalut:App({})};');
  });
});
