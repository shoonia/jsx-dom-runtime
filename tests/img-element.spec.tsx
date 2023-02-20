describe('HTMLImageElement', () => {
  it('should set src', () => {
    expect(<img src="/url" />).toHaveOuterHTML('<img src="/url">');
  });

  it('should set alt', () => {
    expect(<img alt="image test" />).toHaveOuterHTML('<img alt="image test">');
  });

  it('should set width and height', () => {
    const img = <img width={123} height={123} />;

    expect(img).toHaveProperty('width', 123);
    expect(img).toHaveProperty('height', 123);
  });

  it('should add srcset', () => {
    expect(<img srcset="/img.pmg 2x" />).toHaveProperty('srcset', '/img.pmg 2x');
  });

  it('should add sizes', () => {
    expect(<img sizes="(max-width: 600px) 200px, 50vw" />).toHaveProperty(
      'sizes',
      '(max-width: 600px) 200px, 50vw'
    );
  });

  it('should add crossorigin', () => {
    expect(<img crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
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
});
