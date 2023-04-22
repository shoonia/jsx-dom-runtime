describe('HTMLAnchorElement', () => {
  it('should support `href` attribute', () => {
    expect(<a href="/" />).toHaveProperty('href', 'http://localhost/');
    expect(<a href="/" />).toHaveAttribute('href', '/');
  });

  it('should support `target` attribute', () => {
    expect(<a target="_blank" />).toHaveProperty('target', '_blank');
    expect(<a target="_blank" />).toHaveAttribute('target', '_blank');
  });

  it('should support `rel` attribute', () => {
    expect(<a rel="noopener" />).toHaveProperty('rel', 'noopener');
    expect(<a rel="noopener" />).toHaveAttribute('rel', 'noopener');
  });

  it('should support `download` attribute', () => {
    expect(<a download="img.png" />).toHaveProperty('download', 'img.png');
    expect(<a download="img.png" />).toHaveAttribute('download', 'img.png');
  });

  it('should support `type` attribute', () => {
    expect(<a type="image/png" />).toHaveProperty('type', 'image/png');
    expect(<a type="image/png" />).toHaveAttribute('type', 'image/png');
  });

  it('should have the referrerpolicy', () => {
    expect(<a referrerPolicy="origin" />).toHaveAttribute('referrerpolicy', 'origin');
  });

  it('should support `hreflang` attribute', () => {
    expect(<a hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<a hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });
});
