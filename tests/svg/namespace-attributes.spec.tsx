describe('SVG: namespace attributes', () => {
  it('should render `xml:lang` attribute', () => {
    expect(
      <svg viewBox="0 0 200 100">
        <text xml:lang="en-US">This is some English text</text>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 200 100"><text xml:lang="en-US">This is some English text</text></svg>',
    );
  });

  it('should render `xml:space` attribute', () => {
    expect(
      <svg viewBox="0 0 160 50">
        <text y="20" xml:space="default">Default spacing</text>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 50"><text y="20" xml:space="default">Default spacing</text></svg>'
    );
  });
});
