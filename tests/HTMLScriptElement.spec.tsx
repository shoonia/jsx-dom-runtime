describe('HTMLScriptElement', () => {
  it('should have `type` attribute', () => {
    expect(<script type="module" />).toHaveProperty('type', 'module');
    expect(<script type="module" />).toHaveAttribute('type', 'module');
  });

  it('should have `defer` attribute', () => {
    expect(<script defer />).toHaveProperty('defer', true);
    expect(<script defer />).toHaveAttribute('defer', '');
  });

  it('should NOT have `defer` attribute', () => {
    expect(<script defer={false} />).toHaveProperty('defer', false);
    expect(<script defer={false} />).not.toHaveAttribute('defer');
  });

  it('should have `fetchPriority` attribute', () => {
    expect(<script fetchPriority="high" />).toHaveAttribute('fetchpriority', 'high');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<script crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<script crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });
});