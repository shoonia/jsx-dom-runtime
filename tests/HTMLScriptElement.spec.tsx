describe('HTMLScriptElement', () => {
  it('should have `type` attribute', () => {
    expect(<script type="module" />).toHaveProperty('type', 'module');
    expect(<script type="module" />).toHaveAttribute('type', 'module');
  });

  it('should have `src` attribute', () => {
    expect(<script src="index.js" />).toHaveProperty('src', 'http://localhost/index.js');
    expect(<script src="index.js" />).toHaveAttribute('src', 'index.js');
  });

  it('should have `defer` attribute', () => {
    expect(<script defer />).toHaveProperty('defer', true);
    expect(<script defer />).toHaveAttribute('defer', '');
    expect(<script defer="" />).toHaveProperty('defer', true);
  });

  it('should have `noModule` attribute', () => {
    expect(<script noModule />).toHaveAttribute('nomodule', '');
    expect(<script noModule="" />).toHaveAttribute('nomodule', '');
  });

  it('should have `async` attribute', () => {
    expect(<script async />).toHaveAttribute('async', '');
    expect(<script async="" />).toHaveAttribute('async', '');
  });

  it('should have `fetchPriority` attribute', () => {
    expect(<script fetchPriority="high" />).toHaveAttribute('fetchpriority', 'high');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<script crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<script crossOrigin="anonymous" />).toHaveAttribute('crossorigin', 'anonymous');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<script crossOrigin />).toHaveProperty('crossOrigin', '');
    expect(<script crossOrigin />).toHaveAttribute('crossorigin', '');
  });

  it('should have content', () => {
    const imports = JSON.stringify({
      imports: {
        square: './shapes/square.js',
        circle: 'https://example.com/shapes/circle.js'
      }
    });

    expect(<script type="importmap">{imports}</script>).toHaveTextContent(imports);
  });
});
