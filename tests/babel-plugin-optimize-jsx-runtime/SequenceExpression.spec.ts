import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: SequenceExpression', () => {
  it('should work with ,', async () => {
    const result = await t('(<One />, <Two />);');
    expect(result).toBe('One({}),Two({});');
  });

  it('should work with , #2', async () => {
    const result = await t('(1, 2, <App />);');
    expect(result).toBe('1,2,App({});');
  });

  it('should work with , #3', async () => {
    const result = await t('([],<App />, {});');
    expect(result).toBe('[],App({}),{};');
  });

  it('should work inside function', async () => {
    const result = await t('let x = () => (0, <App />);');
    expect(result).toBe('let x=()=>(0,App({}));');
  });
});
