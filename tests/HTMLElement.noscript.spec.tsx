describe('noscript', () => {
  it('should render noscript tag :)', () => {
    expect(
      <noscript>
        <a href="https://www.mozilla.org/">External Link</a>
      </noscript>
    ).toHaveOuterHTML(
      '<noscript><a href="https://www.mozilla.org/">External Link</a></noscript>'
    );
  });
});
