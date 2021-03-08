describe('ARIA attribute', () => {
  it('should have the aria attributes', () => {
    expect(<i aria-label="test" />).toHaveOuterHTML('<i aria-label="test"></i>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b aria-hidden />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={true} />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={false} />).toHaveOuterHTML('<b aria-hidden="false"></b>');
    expect(<b aria-hidden="true" />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden="false" />).toHaveOuterHTML('<b aria-hidden="false"></b>');
  });

  it('shoud not set attribute with null or undefined', () => {
    expect(<span aria-disabled={null} />).toHaveOuterHTML('<span></span>');
    expect(<span aria-disabled={undefined} />).toHaveOuterHTML('<span></span>');
  });
});
