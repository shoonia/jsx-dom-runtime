import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: ReturnStatement', () => {
  it('should work with ArrowFunctionExpression', async () => {
    const result = await t('let fn = () => { return <App />};');
    expect(result).toBe('let fn=()=>{return App({})};');
  });

  it('should work with async ArrowFunctionExpression', async () => {
    const result = await t('let fn = async () => { return <App />};');
    expect(result).toBe('let fn=async()=>{return App({})};');
  });

  it('should work with FunctionDeclaration', async () => {
    const result = await t('function x() { return <App />};');
    expect(result).toBe('function x(){return App({})};');
  });

  it('should work with async FunctionDeclaration', async () => {
    const result = await t('async function x() { return <App />};');
    expect(result).toBe('async function x(){return App({})};');
  });

  it('should work with generator FunctionDeclaration', async () => {
    const result = await t('function*x() { return <App />};');
    expect(result).toBe('function*x(){return App({})};');
  });

  it('should work with async generator FunctionDeclaration', async () => {
    const result = await t('async function*x() { return <App />};');
    expect(result).toBe('async function*x(){return App({})};');
  });

  it('should work with ObjectMethod', async () => {
    const result = await t('let x={a(){return <App />}};');
    expect(result).toBe('let x={a(){return App({})}};');
  });

  it('should work with async ObjectMethod', async () => {
    const result = await t('let x={async a(){return <App />}};');
    expect(result).toBe('let x={async a(){return App({})}};');
  });

  it('should work with generator ObjectMethod', async () => {
    const result = await t('let x={*a(){return <App />}};');
    expect(result).toBe('let x={*a(){return App({})}};');
  });

  it('should work with arrow ObjectMethod', async () => {
    const result = await t('let x={a:()=>{return <App />}};');
    expect(result).toBe('let x={a:()=>{return App({})}};');
  });

  it('should work with arrow async ObjectMethod', async () => {
    const result = await t('let x={ a: async () => { return <App />}};');
    expect(result).toBe('let x={a:async()=>{return App({})}};');
  });
});
