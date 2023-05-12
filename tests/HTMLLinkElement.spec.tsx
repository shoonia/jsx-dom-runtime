describe('HTMLLinkElement', () => {
  it('should support `hreflang` attribute', () => {
    expect(<link hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<link hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });

  it('should support `crossOrigin` attribute', () => {
    expect(<link crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<link crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<link crossOrigin />).toHaveProperty('crossOrigin', '');
    expect(<link crossOrigin />).toHaveAttribute('crossOrigin', '');
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
    expect(<link as="fetch" />).toHaveAttribute('as', 'fetch');
  });

  it('should have `media` attribute', () => {
    expect(<link media="(min-width: 600px)" />).toHaveProperty('media', '(min-width: 600px)');
    expect(<link media="(min-width: 600px)" />).toHaveAttribute('media', '(min-width: 600px)');
  });

  it('should have `sizes` attribute', () => {
    expect(<link sizes="114x114" />).toHaveAttribute('sizes', '114x114');
  });

  it('should have `charset` attribute', () => {
    expect(<link charset="utf-8" />).toHaveProperty('charset', 'utf-8');
    expect(<link charset="utf-8" />).toHaveAttribute('charset', 'utf-8');
  });

  it('should have `fetchPriority` attribute', () => {
    expect(<link fetchPriority="high" />).toHaveAttribute('fetchpriority', 'high');
  });

  it('should support `integrity` attribute', () => {
    expect(<link integrity="dGVzdA==" />).toHaveAttribute('integrity', 'dGVzdA==');
  });

  it('should have `disabled` attribute', () => {
    expect(<link disabled />).toHaveAttribute('disabled', '');
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<link disabled={false} />).not.toHaveAttribute('disabled');
  });
});
