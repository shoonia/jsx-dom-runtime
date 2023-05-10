import { t } from './transform';

describe('babel-plugin-jsx-syntax: ArrowFunctionExpression', () => {
  it('should work with ArrowFunctionExpression', async () => {
    const result = await t('let fn = () => <App />;');
    expect(result).toBe('let fn=()=>App({});');
  });

  it('should work with ArrowFunctionExpression `()`', async () => {
    const result = await t('let fn = () => (<App />);');
    expect(result).toBe('let fn=()=>App({});');
  });

  it('should work with IIFE ArrowFunctionExpression', async () => {
    const result = await t('(() => <App />)();');
    expect(result).toBe('(()=>App({}))();');
  });

  it('should work with ArrowFunctionExpression in ObjectMethod', async () => {
    const result = await t('let x = { a: () => <App /> };');
    expect(result).toBe('let x={a:()=>App({})};');
  });
});
