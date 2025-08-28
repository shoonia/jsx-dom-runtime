describe('HTMLHRElement: <hr />', () => {
  it('should render `hr`', () => {
    expect(<hr />).toHaveOuterHTML('<hr>');
  });

  it('should have `noShade` attribute', () => {
    expect(<hr />).toHaveProperty('noShade', false);
    expect(<hr noShade />).toHaveProperty('noShade', true);
  });
});
