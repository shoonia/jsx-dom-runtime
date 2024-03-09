describe('Babel transform `htmlFor` to `for`', () => {
  it('should transform `htmlFor` attribute in <label />', () => {
    // @ts-expect-error
    const label = <label htmlFor="some" />;

    expect(label).toHaveOuterHTML('<label for="some"></label>');
    expect(label).toHaveProperty('htmlFor', 'some');
  });

  it('should transform `htmlFor` attribute in <output />', () => {
    // @ts-expect-error
    const output: HTMLOutputElement = <output htmlFor="a b" />;

    expect(output).toHaveOuterHTML('<output for="a b"></output>');
    expect(output.htmlFor[0]).toBe('a');
    expect(output.htmlFor[1]).toBe('b');
  });

  it('should not transform `htmlFor` attribute in FC', async () => {
    await expect('<MyElem htmlFor="" />').toBeTransform('MyElem({htmlFor:""});');
  });

  it('should not transform `htmlFor` attribute in Web Component', () => {
    expect(<web-component htmlFor="here"></web-component>).toHaveOuterHTML(
      '<web-component htmlfor="here"></web-component>',
    );
  });
});
