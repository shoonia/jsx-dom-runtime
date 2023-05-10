import { t } from './transform';

describe('babel-plugin-jsx-syntax: BinaryExpression', () => {
  it('should work with +', async () => {
    const result = await t('<One /> + <Two />;');
    expect(result).toBe('One({})+Two({});');
  });

  it('should work with -', async () => {
    const result = await t('<One /> - <Two />;');
    expect(result).toBe('One({})-Two({});');
  });

  it('should work with *', async () => {
    const result = await t('<One /> * <Two />;');
    expect(result).toBe('One({})*Two({});');
  });

  it('should work with **', async () => {
    const result = await t('<One /> ** <Two />;');
    expect(result).toBe('One({})**Two({});');
  });

  it('should work with /', async () => {
    const result = await t('<One /> / <Two />;');
    expect(result).toBe('One({})/Two({});');
  });

  it('should work with >', async () => {
    const result = await t('<One /> > <Two />;');
    expect(result).toBe('One({})>Two({});');
  });

  // FIXME: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (1:8)
  // it('should work with <', async () => {
  //   const result = await t('<One /> < <Two />;');
  //   expect(result).toBe('One({})<Two({});');
  // });

  it('should work with >>', async () => {
    const result = await t('<One /> >> <Two />;');
    expect(result).toBe('One({})>>Two({});');
  });

  it('should work with >>>', async () => {
    const result = await t('<One /> >>> <Two />;');
    expect(result).toBe('One({})>>>Two({});');
  });

  it('should work with >=', async () => {
    const result = await t('<One /> >= <Two />;');
    expect(result).toBe('One({})>=Two({});');
  });

  it('should work with <=', async () => {
    const result = await t('<One /> <= <Two />;');
    expect(result).toBe('One({})<=Two({});');
  });

  it('should work with %', async () => {
    const result = await t('<One /> % <Two />;');
    expect(result).toBe('One({})%Two({});');
  });

  it('should work with &', async () => {
    const result = await t('<One /> & <Two />;');
    expect(result).toBe('One({})&Two({});');
  });

  it('should work with ^', async () => {
    const result = await t('<One /> ^ <Two />;');
    expect(result).toBe('One({})^Two({});');
  });

  it('should work with |', async () => {
    const result = await t('<One /> | <Two />;');
    expect(result).toBe('One({})|Two({});');
  });

  it('should work with ==', async () => {
    const result = await t('<One /> == <Two />;');
    expect(result).toBe('One({})==Two({});');
  });

  it('should work with ===', async () => {
    const result = await t('<One /> === <Two />;');
    expect(result).toBe('One({})===Two({});');
  });
});
