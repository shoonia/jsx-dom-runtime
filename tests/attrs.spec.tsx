describe('Props', () => {
  it('should have the href', () => {
    expect(<a href="/">link</a>).toHaveOuterHTML('<a href="/">link</a>');
  });

  it('should have two attributes', () => {
    expect(<img src="/test" alt="test"/>).toHaveOuterHTML('<img src="/test" alt="test">');
  });

  it('should have the role attribute', () => {
    expect(<div role="contentinfo" />).toHaveOuterHTML('<div role="contentinfo"></div>');
  });
});
