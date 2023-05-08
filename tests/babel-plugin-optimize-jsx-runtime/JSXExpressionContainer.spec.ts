import { t } from './transform';

describe('babel-plugin-optimize-jsx-runtime: JSXExpressionContainer', () => {
  it('should work in JSX attribute value', async () => {
    const result = await t('<div children={<Box/>} />;');
    expect(result).toBe('<div children={Box({})}/>;');
  });
});
