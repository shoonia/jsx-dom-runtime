describe('HTMLAreaElement', () => {
  it('should have `href` attribute', () => {
    expect(<area href="/" />).toHaveProperty('href', 'http://localhost:3000/');
    expect(<area href="/" />).toHaveAttribute('href', '/');
  });

  it('should have `interestfor` attribute', () => {
    expect(<area interestFor="elem-id" />).toHaveAttribute('interestfor', 'elem-id');
  });

  it('should have `interestForElement` property', () => {
    const el = <div /> as HTMLDivElement;
    expect(<area prop:interestForElement={el} />).toHaveProperty('interestForElement', el);
  });
});
