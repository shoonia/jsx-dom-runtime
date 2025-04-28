describe('HTMLLabelElement', () => {
  it('should set `for` attribute', () => {
    expect(<label for="some-id" />).toHaveAttribute('for', 'some-id');
    expect(<label for="some-id" />).toHaveProperty('htmlFor', 'some-id');
  });

  it('should set `htmlFor` property', () => {
    expect(<label prop:htmlFor="some-id" />).toHaveAttribute('for', 'some-id');
    expect(<label prop:htmlFor="some-id" />).toHaveProperty('htmlFor', 'some-id');
  });
});
