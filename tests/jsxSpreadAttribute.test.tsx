import * as babel from '@babel/core';
// @ts-expect-error
import preset from '../babel-preset/index.cjs';

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
  ])('should throw an error for spread attributes on DOM  - %s', (code) => {

    expect(() => {
      babel.transform(code, {
        presets: [preset],
        filename: 'test.js',
      });
    }).toThrow(/SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes./);
  });
});
