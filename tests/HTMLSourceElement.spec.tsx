describe('HTMLSourceElement', () => {
  it('should have `src` attribute', () => {
    expect(<source src="/url" />).toHaveProperty('src', 'http://localhost/url');
    expect(<source src="/url" />).toHaveAttribute('src', '/url');
  });

  it('should have `srcset` attribute', () => {
    expect(<source srcset="/x.pmg 2x" />).toHaveProperty('srcset', '/x.pmg 2x');
    expect(<source srcset="/x.pmg 2x" />).toHaveAttribute('srcset', '/x.pmg 2x');
  });
});
