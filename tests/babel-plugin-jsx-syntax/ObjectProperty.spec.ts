describe('babel-plugin-jsx-syntax: ObjectProperty', () => {
  it('should work as a property value', async () => {
    await expect('let x = { y: <App /> };')
      .toBeTransform('let x={y:App({})};');
  });

  it('should work as a property value #2', async () => {
    await expect('let x = {"y": <App /> };')
      .toBeTransform('let x={"y":App({})};');
  });

  it('should work as a property value #3', async () => {
    await expect('let x = {[y]: <App /> };')
      .toBeTransform('let x={[y]:App({})};');
  });

  it('should work as a property value with children', async () => {
    await expect('let x = {y: <App>{1} hello</App> };')
      .toBeTransform('let x={y:App({children:[1," hello"]})};');
  });
});
