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

  it('should support htmlFor attribute in <label />', () => {
    expect(<label htmlFor="some-id" />).toHaveOuterHTML('<label for="some-id"></label>');
  });

  it('add html to component', () => {
    expect(<div innerHTML="<p>text</p>" />).toHaveOuterHTML('<div><p>text</p></div>');
  });

  it('add text content to component', () => {
    expect(<div textContent="some string" />).toHaveTextContent('some string');
  });
});
