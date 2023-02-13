describe('HTMLOutputElement', () => {
  it('should support `for` attribute', () => {
    // @ts-expect-error
    const output: HTMLOutputElement = <output for="a b" />;

    expect(output).toHaveOuterHTML('<output for="a b"></output>');
    expect(output.htmlFor[0]).toBe('a');
    expect(output.htmlFor[1]).toBe('b');
  });
});
