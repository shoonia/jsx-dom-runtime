import { t } from './utils';

describe('JSXSpreadAttribute', () => {
  it('should allow spread attributes on function components', async () => {
    await expect(`
      const A = ({ id }) => <div id={id} />;
      const props = { id: 'test' };
      const B = () => <A {...props} />;
    `).toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";const A=({id})=>/*#__PURE__*/_jsx("div",{id:id});const props={id:"test"};const B=()=>A({...props});'
    );
  });

  it.each([
    '<div {...props} />;',
    '<svg {...props} />;',
    '<math {...props} />;',
    '<custom-element {...props} />;',
  ])('should throw an error for spread attributes on DOM  - %s', async (code) => {

    await expect(t(code, 'test.tsx', false))
    .rejects.toThrow(/SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes./);
  });
});
