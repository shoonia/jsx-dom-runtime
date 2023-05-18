import { t } from '../utils';

describe('babel-plugin-jsx-syntax: IfStatement', () => {
  it('should work with `if`', async () => {
    const result = await t('if (<One />) <Two />;');
    expect(result).toBe('if(One({}))Two({});');
  });

  it('should work with `else`', async () => {
    const result = await t('if (<App />) <App />; else <App />;');
    expect(result).toBe('if(App({}))App({});else App({});');
  });

  it('should work with `else if`', async () => {
    const result = await t('if (<App />) <App />; else if(<App />) <App />;else <App />');
    expect(result).toBe('if(App({}))App({});else if(App({}))App({});else App({});');
  });

  it('should work with `else if` #2', async () => {
    const result = await t('if (<App />) {} else if(<App />) {} else {}');
    expect(result).toBe('if(App({})){}else if(App({})){}else{}');
  });
});
