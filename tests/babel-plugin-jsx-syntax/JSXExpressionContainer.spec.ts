import { t } from './transform';

describe('babel-plugin-jsx-syntax: JSXExpressionContainer', () => {
  it('should work in JSX attribute value', async () => {
    const result = await t('<div children={<Box/>} />;');
    expect(result).toBe('import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{children:Box({})});');
  });

  it('should work in JSX attribute value #2', async () => {
    const result = await t('<App children={<Box/>} />;');
    expect(result).toBe('App({children:Box({})});');
  });

  it('should work in JSX attribute value #3', async () => {
    const result = await t('<App items={<Box>hello</Box>} />;');
    expect(result).toBe('App({items:Box({children:"hello"})});');
  });

  it('should work in JSX attribute value #4', async () => {
    const result = await t('<App items={<Box><Item /></Box>} />;');
    expect(result).toBe('App({items:Box({children:Item({})})});');
  });

  it('should work in JSX attribute value #5', async () => {
    const result = await t('<App items={<Box><Item elem={<Elem />} /></Box>} />;');
    expect(result).toBe('App({items:Box({children:Item({elem:Elem({})})})});');
  });
});
