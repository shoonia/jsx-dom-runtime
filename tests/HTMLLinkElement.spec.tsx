describe('HTMLLinkElement', () => {
  it('should support `hreflang` attribute', () => {
    expect(<link hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<link hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });

  it('should support `crossOrigin` attribute', () => {
    expect(<link crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<link crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });

  it('should support `rel` attribute', () => {
    expect(<link rel="stylesheet" />).toHaveProperty('rel', 'stylesheet');
    expect(<link rel="stylesheet" />).toHaveAttribute('rel', 'stylesheet');
  });

  it('should have `type` attribute', () => {
    expect(<link type="image/png" />).toHaveProperty('type', 'image/png');
    expect(<link type="image/png" />).toHaveAttribute('type', 'image/png');
  });

  it('should have `title` attribute', () => {
    expect(<link title="test" />).toHaveProperty('title', 'test');
    expect(<link title="test" />).toHaveAttribute('title', 'test');
  });

  it('should have `as` attribute', () => {
    expect(<link as="fetch" />).toHaveProperty('as', 'fetch');
    expect(<link as="fetch" />).toHaveAttribute('as', 'fetch');
  });
});
