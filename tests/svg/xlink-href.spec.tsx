describe('SVG - xlink:href` to `href', () => {
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

  it('should support JSXExpressionContainer', () => {
    const link = 'https://shoonia.site/';

    expect(
      <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* @ts-expect-error */}
        <a xlink:href={link}>
          <text x="10" y="25">Blog</text>
        </a>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">'
      + '<a href="https://shoonia.site/">'
      + '<text x="10" y="25">Blog</text></a></svg>'
    );
  });

  it('should support JSXExpressionContainer #2', () => {
    const protocol = 'https:';

    expect(
      <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* @ts-expect-error */}
        <a xlink:href={protocol + '//shoonia.site/'}>
          <text x="10" y="25">Blog</text>
        </a>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">'
      + '<a href="https://shoonia.site/">'
      + '<text x="10" y="25">Blog</text></a></svg>'
    );
  });

  it('should support JSXExpressionContainer #3', () => {
    const protocol = 'https:';

    expect(
      <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* @ts-expect-error */}
        <a xlink:href={`${protocol}//shoonia.site/`}>
          <text x="10" y="25">Blog</text>
        </a>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">'
      + '<a href="https://shoonia.site/">'
      + '<text x="10" y="25">Blog</text></a></svg>'
    );
  });

  it('should have right order in attributes`', () => {
    expect(
      <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* @ts-expect-error */}
        <a id="first-attr" xlink:href="https://shoonia.site/" class="last-attr">
          <text x="10" y="25">Blog</text>
        </a>
      </svg>
    ).toHaveOuterHTML(
      '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">'
      + '<a id="first-attr" href="https://shoonia.site/" class="last-attr">'
      + '<text x="10" y="25">Blog</text></a></svg>'
    );
  });
});
