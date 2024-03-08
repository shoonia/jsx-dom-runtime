describe('babel-plugin-jsx-syntax: LogicalExpression', () => {
  it('should work with ||', async () => {
    await expect('<One /> || <Two />;').toBeTransform('One({})||Two({});');
  });

  it('should work with &&', async () => {
    await expect('<One /> && <Two />;').toBeTransform('One({})&&Two({});');
  });

  it('should work with ??', async () => {
    await expect('<One /> ?? <Two />;').toBeTransform('One({})??Two({});');
  });
});
