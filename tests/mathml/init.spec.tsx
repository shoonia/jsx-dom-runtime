describe('MathML', () => {
  it('should transform MathML tags', async () => {
    await expect(`
    <math display="inline">
      <mfrac>
        <msup>
          <mi>π</mi>
          <mn>2</mn>
        </msup>
        <mn>6</mn>
      </mfrac>
    </math>`
    ).toBeTransform(
      'import{mathmlNs as _mathmlNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("math",{display:"inline",children:/*#__PURE__*/_jsx("mfrac",{children:[/*#__PURE__*/_jsx("msup",{children:[/*#__PURE__*/_jsx("mi",{children:"\\u03C0",_:_mathmlNs}),/*#__PURE__*/_jsx("mn",{children:"2",_:_mathmlNs})],_:_mathmlNs}),/*#__PURE__*/_jsx("mn",{children:"6",_:_mathmlNs})],_:_mathmlNs}),_:_mathmlNs});'
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
