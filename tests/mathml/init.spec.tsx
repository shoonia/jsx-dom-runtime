import { t } from '../babel-plugin-jsx-syntax/transform';

const start = 'import{mathmlNS as _mathmlNS}from"jsx-dom-runtime";import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('MathML', () => {
  it('should render MathML tags', async () => {
    const result = await t(
      `<math display="inline">
        <mfrac>
          <msup>
            <mi>π</mi>
            <mn>2</mn>
          </msup>
          <mn>6</mn>
        </mfrac>
      </math>`
    );

    expect(result).toBe(
      start + '_jsx("math",{display:"inline",children:/*#__PURE__*/_jsx("mfrac",{children:[/*#__PURE__*/_jsx("msup",{children:[/*#__PURE__*/_jsx("mi",{children:"\\u03C0",__ns:_mathmlNS}),/*#__PURE__*/_jsx("mn",{children:"2",__ns:_mathmlNS})],__ns:_mathmlNS}),/*#__PURE__*/_jsx("mn",{children:"6",__ns:_mathmlNS})],__ns:_mathmlNS}),__ns:_mathmlNS});'
    );
  });
});
