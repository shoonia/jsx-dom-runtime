describe('Props', () => {
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

  it('should add all attributes with spread', () => {
    const props = {
      className: 'some',
      id: 'one',
      textContent: 'Hello',
    };

    expect(<p {...props} />).toHaveOuterHTML('<p class="some" id="one">Hello</p>');
  });

  it('should add all attributes', () => {
    const props = {
      className: 'box',
    };

    expect(<p id="one" {...props} />).toHaveOuterHTML('<p id="one" class="box"></p>');
  });

  it('should add children nodes with spread', () => {
    const props = {
      children: <q />,
    };

    expect(<p {...props} />).toHaveOuterHTML('<p><q></q></p>');
  });
});
