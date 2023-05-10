import { t } from './transform';

const start = 'import{Fragment as _Fragment}from"jsx-dom-runtime";/*#__PURE__*/';

describe('babel-plugin-jsx-syntax: Element', () => {
  it('should NOT have children', async () => {
    const result = await t('<><App></App></>;');
    expect(result).toBe(start + '_Fragment(App({}));');
  });

  it('should have one child number', async () => {
    const result = await t('<><App>{1}</App></>');
    expect(result).toBe(start + '_Fragment(App({children:1}));');
  });

  it('should have one child string', async () => {
    const result = await t('<><App>1</App></>');
    expect(result).toBe(start + '_Fragment(App({children:"1"}));');
  });

  it('should have three children', async () => {
    const result = await t('<><App>{1} {2}</App></>');
    expect(result).toBe(start + '_Fragment(App({children:[1," ",2]}));');
  });

  it('should return expression of JSXSpreadChild', async () => {
    const result = await t('<><App>{...items}</App></>');
    expect(result).toBe(start + '_Fragment(App({children:items}));');
  });

  it('should return expression of JSXSpreadChild on the start', async () => {
    const result = await t('<><App>{...items} end</App></>');
    expect(result).toBe(start + '_Fragment(App({children:[items," end"]}));');
  });

  it('should return expression of JSXSpreadChild on the end', async () => {
    const result = await t('<><App>start {...items}</App></>');
    expect(result).toBe(start + '_Fragment(App({children:["start ",items]}));');
  });

  it('should return expression of JSXSpreadChild between children', async () => {
    const result = await t('<><App>start {...items} end</App></>');
    expect(result).toBe(start + '_Fragment(App({children:["start ",items," end"]}));');
  });
});
