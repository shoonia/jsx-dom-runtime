describe('HTMLFieldSetElement', () => {
  it('should have `disabled` attribute', () => {
    expect(<fieldset disabled />).toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<fieldset disabled="" />).toBeDisabled();
    expect(<fieldset disabled="disabled" />).toBeDisabled();
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<fieldset disabled={false} />).not.toBeDisabled();
  });

  it('should have `name` attribute', () => {
    expect(<fieldset name="here" />).toHaveProperty('name', 'here');
    expect(<fieldset name="here" />).toHaveAttribute('name', 'here');
  });
});
