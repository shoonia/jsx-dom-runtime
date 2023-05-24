describe('SVGDOMAttributeNames', () => {
  it('should transform SVGDOM propertis to Attributes', () => {
    expect(
      // @ts-expect-error
      <circle fill="none" strokeWidth="2" strokeLinejoin="round" />
    ).toHaveOuterHTML(
      '<circle fill="none" stroke-width="2" stroke-linejoin="round"></circle>',
    );
  });

  it('should NOT transform attributes in HTML', () => {
    expect(
      // @ts-expect-error
      <div strokeWidth="2" strokeLinejoin="round"></div>
    ).toHaveOuterHTML(
      '<div strokewidth="2" strokelinejoin="round"></div>'
    );
  });

  it('should NOT transform attributes in MathML', () => {
    expect(
      <math strokeWidth="2" strokeLinejoin="round"></math>
    ).toHaveOuterHTML(
      '<math strokeWidth="2" strokeLinejoin="round"></math>'
    );
  });

  it('should NOT transform attributes in web component', () => {
    expect(
      <web-component strokeWidth="2" strokeLinejoin="round"></web-component>
    ).toHaveOuterHTML(
      '<web-component strokewidth="2" strokelinejoin="round"></web-component>'
    );
  });
});
