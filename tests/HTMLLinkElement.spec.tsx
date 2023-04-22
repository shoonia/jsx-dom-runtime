describe('HTMLLinkElement', () => {
  it('should support `hreflang` attribute', () => {
    expect(<link hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<link hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });
});
