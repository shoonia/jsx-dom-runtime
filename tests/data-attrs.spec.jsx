describe('Data attribute', () => {
  it('should have the data attributes', () => {
    expect(<p data-test="text">text</p>).toHaveOuterHTML('<p data-test="text">text</p>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b data-on={true} />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on={false} />).toHaveOuterHTML('<b data-on="false"></b>');
  });

  it('shoud not set attribute with null or undefined', () => {
    expect(<span data-on={null} />).toHaveOuterHTML('<span></span>');
    expect(<span data-on={undefined} />).toHaveOuterHTML('<span></span>');
  });
});
