describe('Props', () => {
  it('should have the href', () => {
    expect(<a href="/">link</a>).toHaveOuterHTML('<a href="/">link</a>');
  });

  it('should have two attributes', () => {
    expect(<img src="/test" alt="test"/>).toHaveOuterHTML('<img src="/test" alt="test">');
  });

  it('should have the data attributes', () => {
    expect(<b data-test="true">link</b>).toHaveOuterHTML('<b data-test="true">link</b>');
  });

  it('should have the aria attributes', () => {
    expect(<i aria-label="test" />).toHaveOuterHTML('<i aria-label="test"></i>');
  });

  it('should have the role attribute', () => {
    expect(<div role="contentinfo" />).toHaveOuterHTML('<div role="contentinfo"></div>');
  });
});
