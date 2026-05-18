describe('HTMLAreaElement', () => {
  it('should have `href` attribute', () => {
    expect(<area href="/" />).toHaveProperty('href', 'http://localhost/');
    expect(<area href="/" />).toHaveAttribute('href', '/');
  });

  it('should have `interestfor` attribute', () => {
    expect(<area interestfor="elem-id" />).toHaveAttribute('interestfor', 'elem-id');
  });

  it('should have `interestForElement` property', () => {
    const el = <div /> as HTMLDivElement;
    expect(<area prop:interestForElement={el} />).toHaveProperty('interestForElement', el);
  });
});
