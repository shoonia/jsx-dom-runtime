import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ExpressionStatement', () => {
  it('should work as expression', async () => {
    const result = await t('<App />;');
    expect(result).toBe('App({});');
  });

  it('should work as expression in line', async () => {
    const result = await t('<App />;<Two />');
    expect(result).toBe('App({});Two({});');
  });

  it('should work in block', async () => {
    const result = await t('{ <App />; };');
    expect(result).toBe('{App({})};');
  });

  it('should work a few components in block', async () => {
    const result = await t('{ <App />; <Two />; };');
    expect(result).toBe('{App({});Two({})};');
  });

  it('should work LabeledStatement', async () => {
    const result = await t('name: <App />;');
    expect(result).toBe('name:App({});');
  });

  it('should work DebuggerStatement', async () => {
    const result = await t('debugger; <App />;');
    expect(result).toBe('debugger;App({});');
  });
});