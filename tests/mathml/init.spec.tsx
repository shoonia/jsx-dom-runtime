import { t } from '../utils';

describe('MathML', () => {
  it('should transform MathML tags', async () => {
    const result = await t`
      <math display="inline">
        <mfrac>
          <msup>
            <mi>π</mi>
            <mn>2</mn>
          </msup>
          <mn>6</mn>
        </mfrac>
      </math>`;

    expect(result).toBe(
      'import{mathmlNS as _mathmlNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("math",{display:"inline",children:/*#__PURE__*/_jsx("mfrac",{children:[/*#__PURE__*/_jsx("msup",{children:[/*#__PURE__*/_jsx("mi",{children:"\\u03C0",ns:_mathmlNS}),/*#__PURE__*/_jsx("mn",{children:"2",ns:_mathmlNS})],ns:_mathmlNS}),/*#__PURE__*/_jsx("mn",{children:"6",ns:_mathmlNS})],ns:_mathmlNS}),ns:_mathmlNS});'
    );
  });

  it('should render MathML tags', async () => {
    document.body.append(
      <math display="inline">
        <mfrac>
          <msup>
            <mi>π</mi>
            <mn>2</mn>
          </msup>
          <mn>6</mn>
        </mfrac>
      </math>
    );

    expect(document.body).toHaveInnerHTML(
      '<math display="inline"><mfrac><msup><mi>π</mi><mn>2</mn></msup><mn>6</mn></mfrac></math>'
    );
  });
});
