describe('<svg />', () => {
  it('should work with width/height attributes as numbers', () => {
    expect(
      <svg width={300} height={200} viewBox="0 0 3 2">
        <path fill="#005bbb" d="M0 0h3v1H0z" />
        <path fill="#ffd500" d="M0 1h3v1H0z" />
      </svg>
    ).toHaveOuterHTML(
      '<svg width="300" height="200" viewBox="0 0 3 2"><path fill="#005bbb" d="M0 0h3v1H0z"></path><path fill="#ffd500" d="M0 1h3v1H0z"></path></svg>',
    );
  });
});
