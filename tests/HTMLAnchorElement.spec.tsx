describe('HTMLAnchorElement', () => {
  it('should have `href` attribute', () => {
    expect(<a href="/" />).toHaveProperty('href', 'http://localhost/');
    expect(<a href="/" />).toHaveAttribute('href', '/');
  });

  it('should have `target` attribute', () => {
    expect(<a target="_blank" />).toHaveProperty('target', '_blank');
    expect(<a target="_blank" />).toHaveAttribute('target', '_blank');
  });

  it('should have `rel` attribute', () => {
    expect(<a rel="noopener" />).toHaveProperty('rel', 'noopener');
    expect(<a rel="noopener" />).toHaveAttribute('rel', 'noopener');
  });

  it('should have `download` attribute', () => {
    expect(<a download="img.png" />).toHaveProperty('download', 'img.png');
    expect(<a download="img.png" />).toHaveAttribute('download', 'img.png');
  });

  it('should have `type` attribute', () => {
    expect(<a type="image/png" />).toHaveProperty('type', 'image/png');
    expect(<a type="image/png" />).toHaveAttribute('type', 'image/png');
  });

  it('should have the `referrerPolicy` attribute', () => {
    expect(<a referrerPolicy="origin" />).toHaveAttribute('referrerpolicy', 'origin');
  });

  it('should have the `ping` attribute', () => {
    expect(<a ping="/ping" />).toHaveAttribute('ping', '/ping');
  });

  it('should have `hreflang` attribute', () => {
    expect(<a hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<a hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });
});
