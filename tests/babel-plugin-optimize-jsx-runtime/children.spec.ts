import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: Element', () => {
  it('should NOT have children', async () => {
    const result = await t('<><App></App></>;');
    expect(result).toBe('<>{App({})}</>;');
  });

  it('should have one child number', async () => {
    const result = await t('<><App>{1}</App></>');
    expect(result).toBe('<>{App({children:1})}</>;');
  });

  it('should have one child string', async () => {
    const result = await t('<><App>1</App></>');
    expect(result).toBe('<>{App({children:"1"})}</>;');
  });

  it('should have three children', async () => {
    const result = await t('<><App>{1} {2}</App></>');
    expect(result).toBe('<>{App({children:[1," ",2]})}</>;');
  });
});
