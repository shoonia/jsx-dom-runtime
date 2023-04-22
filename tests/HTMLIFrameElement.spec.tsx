describe('HTMLIFrameElement', () => {
  it('should set src', () => {
    expect(<iframe src="/doc" />).toHaveAttribute('src', '/doc');
    expect(<iframe src="/doc" />).toHaveProperty('src', 'http://localhost/doc');
  });

  it('should set width / height', () => {
    expect(<iframe height={99} />).toHaveAttribute('height', '99');
    expect(<iframe width={101} />).toHaveAttribute('width', '101');
  });

  it('should support allowfullscreen', () => {
    expect(<iframe allowFullScreen />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowFullScreen={true} />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowFullScreen={false} />).not.toHaveAttribute('allowFullScreen');
  });

  it('should set loading', () => {
    expect(<iframe loading="lazy" />).toHaveAttribute('loading', 'lazy');
  });

  it('should have a title', () => {
    expect(<iframe title="Page" />).toHaveAttribute('title', 'Page');
    expect(<iframe title="Page" />).toHaveProperty('title', 'Page');
  });

  it('should have `srcdoc` attribute', () => {
    expect(<iframe srcdoc="<p></p>" />).toHaveAttribute('srcdoc', '<p></p>');
    expect(<iframe srcdoc="<p></p>" />).toHaveProperty('srcdoc', '<p></p>');
  });

  it('should have `sandbox` attribute', () => {
    expect(<iframe sandbox="allow-downloads" />).toHaveAttribute('sandbox', 'allow-downloads');
  });
});
