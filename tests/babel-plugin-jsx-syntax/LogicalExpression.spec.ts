import { t } from './transform';

describe('babel-plugin-jsx-syntax: LogicalExpression', () => {
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
