describe('babel-plugin-jsx-syntax: AssignmentExpression', () => {
  it('should work with =', async () => {
    await expect('x = <App />;').toBeTransform('x=App({});');
  });

  it('should work with a few assignments', async () => {
    await expect('x = <App />, y = <Box />;').toBeTransform('x=App({}),y=Box({});');
  });

  it('should work with |=', async () => {
    await expect('x |= <App />;').toBeTransform('x|=App({});');
  });

  it('should work with ||=', async () => {
    await expect('x ||= <App />;').toBeTransform('x||=App({});');
  });

  it('should work with &=', async () => {
    await expect('x &= <App />;').toBeTransform('x&=App({});');
  });

  it('should work with ^=', async () => {
    await expect('x ^= <App />;').toBeTransform('x^=App({});');
  });

  it('should work with &&=', async () => {
    await expect('x &&= <App />;').toBeTransform('x&&=App({});');
  });

  it('should work with *=', async () => {
    await expect('x *= <App />;').toBeTransform('x*=App({});');
  });

  it('should work with **=', async () => {
    await expect('x **= <App />;').toBeTransform('x**=App({});');
  });

  it('should work with %=', async () => {
    await expect('x %= <App />;').toBeTransform('x%=App({});');
  });

  it('should work with /=', async () => {
    await expect('x /= <App />;').toBeTransform('x/=App({});');
  });

  it('should work with +=', async () => {
    await expect('x += <App />;').toBeTransform('x+=App({});');
  });

  it('should work with -=', async () => {
    await expect('x -= <App />;').toBeTransform('x-=App({});');
  });

  it('should work with ??=', async () => {
    await expect('x ??= <App />;').toBeTransform('x??=App({});');
  });

  it('should work with <<=', async () => {
    await expect('x <<= <App />;').toBeTransform('x<<=App({});');
  });

  it('should work with >>=', async () => {
    await expect('x >>= <App />;').toBeTransform('x>>=App({});');
  });

  it('should work with >>>=', async () => {
    await expect('x >>>= <App />;').toBeTransform('x>>>=App({});');
  });
});
