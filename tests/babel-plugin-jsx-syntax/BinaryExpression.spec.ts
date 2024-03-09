describe('babel-plugin-jsx-syntax: BinaryExpression', () => {
  it('should work with +', async () => {
    await expect('<One /> + <Two />;').toBeTransform('One({})+Two({});');
  });

  it('should work with -', async () => {
    await expect('<One /> - <Two />;').toBeTransform('One({})-Two({});');
  });

  it('should work with *', async () => {
    await expect('<One /> * <Two />;').toBeTransform('One({})*Two({});');
  });

  it('should work with **', async () => {
    await expect('<One /> ** <Two />;').toBeTransform('One({})**Two({});');
  });

  it('should work with /', async () => {
    await expect('<One /> / <Two />;').toBeTransform('One({})/Two({});');
  });

  it('should work with >', async () => {
    await expect('<One /> > <Two />;').toBeTransform('One({})>Two({});');
  });

  it('should work with <', async () => {
    await expect('(<One />) < <Two />;').toBeTransform('One({})<Two({});');
  });

  it('should work with <<', async () => {
    await expect('<One /> << <Two />;').toBeTransform('One({})<<Two({});');
  });

  it('should work with >>', async () => {
    await expect('<One /> >> <Two />;').toBeTransform('One({})>>Two({});');
  });

  it('should work with >>>', async () => {
    await expect('<One /> >>> <Two />;').toBeTransform('One({})>>>Two({});');
  });

  it('should work with >=', async () => {
    await expect('<One /> >= <Two />;').toBeTransform('One({})>=Two({});');
  });

  it('should work with <=', async () => {
    await expect('<One /> <= <Two />;').toBeTransform('One({})<=Two({});');
  });

  it('should work with %', async () => {
    await expect('<One /> % <Two />;').toBeTransform('One({})%Two({});');
  });

  it('should work with &', async () => {
    await expect('<One /> & <Two />;').toBeTransform('One({})&Two({});');
  });

  it('should work with ^', async () => {
    await expect('<One /> ^ <Two />;').toBeTransform('One({})^Two({});');
  });

  it('should work with |', async () => {
    await expect('<One /> | <Two />;').toBeTransform('One({})|Two({});');
  });

  it('should work with ==', async () => {
    await expect('<One /> == <Two />;').toBeTransform('One({})==Two({});');
  });

  it('should work with ===', async () => {
    await expect('<One /> === <Two />;').toBeTransform('One({})===Two({});');
  });

  it('should work with !=', async () => {
    await expect('<One /> != <Two />;').toBeTransform('One({})!=Two({});');
  });

  it('should work with !==', async () => {
    await expect('<One /> !== <Two />;').toBeTransform('One({})!==Two({});');
  });

  it('should work with `instanceof`', async () => {
    await expect('<One /> instanceof <Two />;').toBeTransform('One({})instanceof Two({});');
  });

  it('should work with `in`', async () => {
    await expect('"key" in <App />;').toBeTransform('"key"in App({});');
  });
});
