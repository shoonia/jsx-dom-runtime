describe('SVGImageElement', () => {
  it('should render <image>', () => {
    expect(
      <svg width="200" height="200">
        <image href="https://shoonia.github.io/jobs.config/favicon.png" height="200" width="200" />
      </svg>
    ).toHaveOuterHTML(
      '<svg width="200" height="200"><image href="https://shoonia.github.io/jobs.config/favicon.png" height="200" width="200"></image></svg>'
    );
  });
});
