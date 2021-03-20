describe('HTMLIFrameElement', () => {
  it('should set src', () => {
    expect(<iframe src="/doc" />).toHaveAttribute('src', '/doc');
  });

  it('should set width / height', () => {
    expect(<iframe height={99} />).toHaveAttribute('height', '99');
    expect(<iframe width={101} />).toHaveAttribute('width', '101');
  });

  it('should support allowfullscreen', () => {
    expect(<iframe allowFullScreen />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowFullScreen={true} />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowFullScreen={false} />).not.toHaveAttribute('allowFullScreen');

    expect(<iframe allowfullscreen />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowfullscreen={true} />).toHaveAttribute('allowFullScreen', '');
    expect(<iframe allowfullscreen={false} />).not.toHaveAttribute('allowFullScreen');
  });

  it('should set loading', () => {
    expect(<iframe loading="lazy" />).toHaveAttribute('loading', 'lazy');
  });

  it('should have a title', () => {
    expect(<iframe title="Page" />).toHaveAttribute('title', 'Page');
    expect(<iframe title="Page" />).toHaveProperty('title', 'Page');
  });

  it('should have a srcDoc', () => {
    expect(<iframe srcDoc="<p></p>" />).toHaveAttribute('srcdoc', '<p></p>');
    expect(<iframe srcdoc="<p></p>" />).toHaveAttribute('srcdoc', '<p></p>');
  });
});
