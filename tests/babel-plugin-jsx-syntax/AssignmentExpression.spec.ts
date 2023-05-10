import { t } from './transform';

describe('babel-plugin-jsx-syntax: AssignmentExpression', () => {
  it('should work with =', async () => {
    const result = await t('x = <App />;');
    expect(result).toBe('x=App({});');
  });

  it('should work with a few assignments', async () => {
    const result = await t('x = <App />, y = <Box />;');
    expect(result).toBe('x=App({}),y=Box({});');
  });

  it('should work with |=', async () => {
    const result = await t('x |= <App />;');
    expect(result).toBe('x|=App({});');
  });

  it('should work with ||=', async () => {
    const result = await t('x ||= <App />;');
    expect(result).toBe('x||=App({});');
  });

  it('should work with &=', async () => {
    const result = await t('x &= <App />;');
    expect(result).toBe('x&=App({});');
  });

  it('should work with &&=', async () => {
    const result = await t('x &&= <App />;');
    expect(result).toBe('x&&=App({});');
  });

  it('should work with *=', async () => {
    const result = await t('x *= <App />;');
    expect(result).toBe('x*=App({});');
  });

  it('should work with /=', async () => {
    const result = await t('x /= <App />;');
    expect(result).toBe('x/=App({});');
  });

  it('should work with +=', async () => {
    const result = await t('x += <App />;');
    expect(result).toBe('x+=App({});');
  });

  it('should work with -=', async () => {
    const result = await t('x -= <App />;');
    expect(result).toBe('x-=App({});');
  });

  it('should work with ??=', async () => {
    const result = await t('x ??= <App />;');
    expect(result).toBe('x??=App({});');
  });
});
