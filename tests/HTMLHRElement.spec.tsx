describe('HTMLHRElement: <hr />', () => {
  it('should render `hr`', () => {
    expect(<hr />).toHaveOuterHTML('<hr>');
  });
});
