describe('HTMLImageElement', () => {
  it('should set src', () => {
    expect(<img src="/url" />).toHaveOuterHTML('<img src="/url">');
  });

  it('should set alt', () => {
    expect(<img alt="image test" />).toHaveOuterHTML('<img alt="image test">');
  });
});
