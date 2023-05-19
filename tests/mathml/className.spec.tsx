describe('className / class', () => {
  it('should have a `class` attribute', () => {
    expect(
      <math display="block" class="math">
        <mfenced>
          <mrow>
            <mi> a </mi>
            <mo> + </mo>
            <mi> b </mi>
          </mrow>
        </mfenced>
      </math>
    ).toHaveOuterHTML(
      '<math display="block" class="math"><mfenced><mrow><mi> a </mi><mo> + </mo><mi> b </mi></mrow></mfenced></math>'
    );
  });

  it('should update a `className` to `class`', () => {
    expect(
      <math display="block" className="math">
        <mfenced>
          <mrow>
            <mi> a </mi>
            <mo> + </mo>
            <mi> b </mi>
          </mrow>
        </mfenced>
      </math>
    ).toHaveOuterHTML(
      '<math display="block" class="math"><mfenced><mrow><mi> a </mi><mo> + </mo><mi> b </mi></mrow></mfenced></math>'
    );
  });
});
