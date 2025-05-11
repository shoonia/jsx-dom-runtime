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
      'import{mathmlNs as _mathmlNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("math",{display:"inline",_:_mathmlNs},/*#__PURE__*/_jsx("mfrac",{_:_mathmlNs},[/*#__PURE__*/_jsx("msup",{_:_mathmlNs},[/*#__PURE__*/_jsx("mi",{_:_mathmlNs},"\\u03C0"),/*#__PURE__*/_jsx("mn",{_:_mathmlNs},"2")]),/*#__PURE__*/_jsx("mn",{_:_mathmlNs},"6")]));'
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
