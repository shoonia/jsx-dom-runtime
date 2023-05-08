import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: LogicalExpression', () => {
  it('should work with ||', async () => {
    const result = await t('<One /> || <Two />;');
    expect(result).toBe('One({})||Two({});');
  });

  it('should work with &&', async () => {
    const result = await t('<One /> && <Two />;');
    expect(result).toBe('One({})&&Two({});');
  });

  it('should work with ??', async () => {
    const result = await t('<One /> ?? <Two />;');
    expect(result).toBe('One({})??Two({});');
  });
});
