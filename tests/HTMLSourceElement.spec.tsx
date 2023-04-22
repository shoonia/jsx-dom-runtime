describe('HTMLSourceElement', () => {
  it('should have `src` attribute', () => {
    expect(<source src="/url" />).toHaveProperty('src', 'http://localhost/url');
    expect(<source src="/url" />).toHaveAttribute('src', '/url');
  });

  it('should have `srcset` attribute', () => {
    expect(<source srcset="/x.pmg 2x" />).toHaveProperty('srcset', '/x.pmg 2x');
    expect(<source srcset="/x.pmg 2x" />).toHaveAttribute('srcset', '/x.pmg 2x');
  });

  it('should have `type` attribute', () => {
    expect(<source type="video/mp4" />).toHaveProperty('type', 'video/mp4');
    expect(<source type="video/mp4" />).toHaveAttribute('type', 'video/mp4');
  });

  it('should have `media` attribute', () => {
    expect(<source media="(min-width: 600px)" />).toHaveProperty('media', '(min-width: 600px)');
    expect(<source media="(min-width: 600px)" />).toHaveAttribute('media', '(min-width: 600px)');
  });

  it('should have `width` attribute', () => {
    expect(<source width={100} />).toHaveAttribute('width', '100');
  });

  it('should have `height` attribute', () => {
    expect(<source height={100} />).toHaveAttribute('height', '100');
  });
});
