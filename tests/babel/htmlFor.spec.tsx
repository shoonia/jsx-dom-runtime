describe('`htmlFor` to `for`', () => {
  it('should transform `htmlFor` attribute in <label />', () => {
    // @ts-expect-error
    expect(<label htmlFor="some-1" />).toHaveOuterHTML('<label for="some-1"></label>');
    // @ts-expect-error
    expect(<label htmlFor="some-2" />).toHaveProperty('htmlFor', 'some-2');
  });

  it('should transform `htmlFor` attribute in <output />', () => {
    // @ts-expect-error
    const output: HTMLOutputElement = <output htmlFor="a b" />;

    expect(output).toHaveOuterHTML('<output for="a b"></output>');
    expect(output.htmlFor[0]).toBe('a');
    expect(output.htmlFor[1]).toBe('b');
  });

  it('should not transform `htmlFor` attribute in FC', () => {
    const MyElem = (props) => Object.keys(props).join('');

    expect(<MyElem htmlFor="" />).toBe('htmlFor');
  });
});
