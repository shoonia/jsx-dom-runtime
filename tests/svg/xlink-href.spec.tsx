describe('<svg/> support', () => {
  it('should replace `xlink:href` to `href`', () => {
    expect(
      <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* @ts-expect-error */}
        <a xlink:href="https://shoonia.site/">
          <text x="10" y="25">Blog</text>
        </a>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">'
      + '<a href="https://shoonia.site/">'
      + '<text x="10" y="25">Blog</text></a></svg>'
    );
  });
});
