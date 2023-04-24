describe('HTMLScriptElement', () => {
  it('should have `fetchPriority` attribute', () => {
    expect(<script fetchPriority="high" />).toHaveAttribute('fetchpriority', 'high');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<script crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<script crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });
});
