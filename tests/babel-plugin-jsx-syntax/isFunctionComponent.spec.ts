const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_$'.split('');

expect(list).toHaveLength(28);

describe('babel: isFunctionComponent', () => {
  it('should work with componet as a FC', async () => {
    expect.hasAssertions();

    const tests = list.map((i) =>
      expect(`<${i} test />`).toBeTransform(`${i}({test:true});`)
    );

    await Promise.all(tests);
  });

  it('should work with lowercase JSXMemberExpression', async () => {
    await expect('<member.expression lowerCase />')
      .toBeTransform('member.expression({lowerCase:true});');
  });
});
