describe('HTMLImageElement', () => {
  it('should have `src` attribute', () => {
    expect(<img src="/url" />).toHaveProperty('src', 'http://localhost/url');
  });

  it('should set alt', () => {
    expect(<img alt="image test" />).toHaveOuterHTML('<img alt="image test">');
    expect(<img alt="image test" />).toHaveProperty('alt', 'image test');
  });

  it('should have `width` attribute', () => {
    expect(<img width={123} />).toHaveProperty('width', 123);
    expect(<img width={123} />).toHaveAttribute('width', '123');
  });

  it('should have `height` attribute', () => {
    expect(<img height={123} />).toHaveProperty('height', 123);
    expect(<img height={123} />).toHaveAttribute('height', '123');
  });

  it('should add srcset', () => {
    expect(<img srcset="/img.pmg 2x" />).toHaveProperty('srcset', '/img.pmg 2x');
    expect(<img srcset="/img.pmg 2x" />).toHaveAttribute('srcset', '/img.pmg 2x');
  });

  it('should add sizes', () => {
    expect(<img sizes="(max-width: 600px) 200px, 50vw" />).toHaveProperty(
      'sizes',
      '(max-width: 600px) 200px, 50vw'
    );
  });

  it('should add crossorigin', () => {
    expect(<img crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<img crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<img crossOrigin />).toHaveProperty('crossOrigin', '');
    expect(<img crossOrigin />).toHaveAttribute('crossOrigin', '');
  });

  it('should add loading', () => {
    expect(<img loading="lazy" />).toHaveAttribute('loading', 'lazy');
  });

  it('should add decoding', () => {
    expect(<img decoding="async" />).toHaveAttribute('decoding', 'async');
  });

  it('should have the referrerpolicy', () => {
    expect(<img referrerPolicy="origin" />).toHaveOuterHTML('<img referrerpolicy="origin">');
  });

  it('should have `useMap` attribute & property', () => {
    expect(<img useMap="#test" />).toHaveProperty('useMap', '#test');
    expect(<img useMap="#test" />).toHaveAttribute('usemap', '#test');
  });

  it('should have `fetchPriority` attribute', () => {
    expect(<img fetchPriority="high" />).toHaveAttribute('fetchpriority', 'high');
  });
});
