describe('htmlDOMAttributes', () => {
  it('should transform `httpEquiv` propertis', () => {
    // @ts-expect-error
    expect(<meta httpEquiv="X-UA-Compatible" />).toHaveOuterHTML('<meta http-equiv="X-UA-Compatible">');
  });

  it('should transform `acceptCharset` propertis', () => {
    // @ts-expect-error
    expect(<form acceptCharset="utf-8" />).toHaveOuterHTML('<form accept-charset="utf-8"></form>');
  });

  it('should transform `htmlFor` propertis', () => {
    // @ts-expect-error
    expect(<label htmlFor="hello" />).toHaveOuterHTML('<label for="hello"></label>');
  });
});
