describe('Props', () => {
  it('should have the href', () => {
    expect(<a href="/">link</a>).toBeHaveOuterHTML('<a href="/">link</a>');
  });

  it('should have two attributes', () => {
    expect(<img src="/test" alt="test"/>).toBeHaveOuterHTML('<img src="/test" alt="test">');
  });

  it('should have the data attributes', () => {
    expect(<b data-test="true">link</b>).toBeHaveOuterHTML('<b data-test="true">link</b>');
  });

  it('should have the aria attributes', () => {
    expect(<i aria-label="test" />).toBeHaveOuterHTML('<i aria-label="test"></i>');
  });

  it('should have the role attribute', () => {
    expect(<div role="contentinfo" />).toBeHaveOuterHTML('<div role="contentinfo"></div>');
  });
});
