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

  it('should throw an error for spread attributes on HTML elements', () => {
    const inputCode = `
      const props = { id: 'test' };
      const B = () => <div {...props} />;
    `;

    expect(() => {
      babel.transform(inputCode, {
        presets: [preset],
        filename: 'test.js',
      });
    }).toThrow(/SyntaxError: HTML, SVG, and MathML elements must not have spread attributes./); // Ensure the error is thrown and matches the snapshot
  });
});
