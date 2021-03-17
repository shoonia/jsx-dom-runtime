describe('HTMLAnchorElement', () => {
  it('should have the href', () => {
    expect(<a href="/">link</a>).toHaveOuterHTML('<a href="/">link</a>');
  });

  it('should have the target', () => {
    expect(<a target="_blank">link</a>).toHaveOuterHTML('<a target="_blank">link</a>');
  });

  it('should have the rel', () => {
    expect(<a rel="noopener">link</a>).toHaveOuterHTML('<a rel="noopener">link</a>');
  });

  it('should have the download', () => {
    expect(<a download="img.png">link</a>).toHaveOuterHTML('<a download="img.png">link</a>');
  });

  it('should have the type', () => {
    expect(<a type="image/png">link</a>).toHaveOuterHTML('<a type="image/png">link</a>');
  });

  it('should have the referrerpolicy', () => {
    expect(<a referrerPolicy="origin" />).toHaveOuterHTML('<a referrerpolicy="origin"></a>');
    expect(<a referrerpolicy="origin" />).toHaveOuterHTML('<a referrerpolicy="origin"></a>');
  });
});
