describe('HTMLOutputElement', () => {
  it('should support `for` attribute', () => {
    const output = <output for="a b" /> as HTMLOutputElement;

    expect(output).toHaveOuterHTML('<output for="a b"></output>');
    expect(output.htmlFor[0]).toBe('a');
    expect(output.htmlFor[1]).toBe('b');
  });

  it('should support `name` attribute', () => {
    expect(<output name="hello" />).toHaveProperty('name', 'hello');
    expect(<output name="hello" />).toHaveAttribute('name', 'hello');
  });

  it('should have `value` property', () => {
    expect(<output value="11" />).toHaveValue('11');
  });
});
