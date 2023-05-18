import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ArrayExpression', () => {
  it('should work with array', async () => {
    const result = await t('[<App />];');
    expect(result).toBe('[App({})];');
  });

  it('should work with a few items', async () => {
    const result = await t('[<App />, <Box />];');
    expect(result).toBe('[App({}),Box({})];');
  });

  it('should have right index position', async () => {
    const result = await t('[1, <App />, 3, 4];');
    expect(result).toBe('[1,App({}),3,4];');
  });

  it('should have right index position with children', async () => {
    const result = await t('[1, <App>1</App>, 3, 4];');
    expect(result).toBe('[1,App({children:"1"}),3,4];');
  });

  it('should have right index position with children #2', async () => {
    const result = await t('[1, <App><div/></App>, 3, 4];');
    expect(result).toBe('import{jsx as _jsx}from"jsx-dom-runtime";[1,App({children:/*#__PURE__*/_jsx("div",{})}),3,4];');
  });
});
