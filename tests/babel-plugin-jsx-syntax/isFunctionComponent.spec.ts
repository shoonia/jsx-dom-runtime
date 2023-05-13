import { t } from './transform';

const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_$'.split('');

describe('babel-plugin-jsx-syntax: isFunctionComponent', () => {
  it('should work with componet as a FC', async () => {
    expect.hasAssertions();

    const tests = list.map(async (i) => {
      const result = await t(`<${i} test />`);
      expect(result).toBe(`${i}({test:true});`);
    });

    await Promise.all(tests);
  });

  it('should work with lowercase JSXMemberExpression', async () => {
    const result = await t('<member.expression lowerCase />');
    expect(result).toBe('member.expression({lowerCase:true});');
  });
});
