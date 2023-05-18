import { t } from '../utils';

describe('babel-plugin-jsx-syntax: ObjectProperty', () => {
  it('should work as a property value', async () => {
    const result = await t('let x = { y: <App /> };');
    expect(result).toBe('let x={y:App({})};');
  });

  it('should work as a property value #2', async () => {
    const result = await t('let x = {"y": <App /> };');
    expect(result).toBe('let x={"y":App({})};');
  });

  it('should work as a property value #3', async () => {
    const result = await t('let x = {[y]: <App /> };');
    expect(result).toBe('let x={[y]:App({})};');
  });

  it('should work as a property value with children', async () => {
    const result = await t('let x = {y: <App>{1} hello</App> };');
    expect(result).toBe('let x={y:App({children:[1," hello"]})};');
  });
});
