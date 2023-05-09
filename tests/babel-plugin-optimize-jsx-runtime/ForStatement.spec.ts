import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: ForStatement', () => {
  it('should work with `for` loop, init', async () => {
    const result = await t('for (<App />; ;) {};');
    expect(result).toBe('for(App({});;){};');
  });

  it('should work with `for` loop, test', async () => {
    const result = await t('for (;<App />;) {};');
    expect(result).toBe('for(;App({});){};');
  });

  it('should work with `for` loop, update', async () => {
    const result = await t('for (; ;<App />) {};');
    expect(result).toBe('for(;;App({})){};');
  });

  it('should work with `for` loop, all', async () => {
    const result = await t('for (<Init />; <Test />; <Update />) {};');
    expect(result).toBe('for(Init({});Test({});Update({})){};');
  });
});
