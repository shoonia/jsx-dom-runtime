describe('MathML: <annotation-xml />', () => {
  it('should render', () => {
    expect(<annotation-xml id="id" />).toHaveOuterHTML('<annotation-xml id="id"></annotation-xml>');
  });

  it('should transform', async () => {
    await expect('<annotation-xml id="id" />').toBeTransform(
      'import{mathmlNs as _mathmlNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("annotation-xml",{id:"id",ns:_mathmlNs});'
    );
  });
});
