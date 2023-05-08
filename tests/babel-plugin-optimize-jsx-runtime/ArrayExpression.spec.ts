import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: ArrayExpression', () => {
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
});
