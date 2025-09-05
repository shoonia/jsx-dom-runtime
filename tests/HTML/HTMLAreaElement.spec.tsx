describe('HTMLAreaElement', () => {
  it('should have `href` attribute', () => {
    expect(<area href="/" />).toHaveProperty('href', 'http://localhost/');
    expect(<area href="/" />).toHaveAttribute('href', '/');
  });
});
