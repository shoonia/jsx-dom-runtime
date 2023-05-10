import { t } from './transform';

describe('babel-plugin-jsx-syntax: AssignmentPattern', () => {
  it('should work with default parameters', async () => {
    const result = await t('let {x = <App />} = data;');
    expect(result).toBe('let{x=App({})}=data;');
  });

  it('should work with function declaration', async () => {
    const result = await t('function x(a = <App />) {};');
    expect(result).toBe('function x(a=App({})){};');
  });

  it('should work with arrow function', async () => {
    const result = await t('let x = (a = <App />) => {};');
    expect(result).toBe('let x=(a=App({}))=>{};');
  });

  it('should work with arrow function #2', async () => {
    const result = await t('let x = (a, b = <App />) => {};');
    expect(result).toBe('let x=(a,b=App({}))=>{};');
  });
});
