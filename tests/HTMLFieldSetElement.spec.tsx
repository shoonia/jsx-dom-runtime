describe('HTMLFieldSetElement', () => {
  it('should have `disabled` attribute', () => {
    expect(<fieldset disabled />).toHaveProperty('disabled', true);
    expect(<fieldset disabled />).toHaveAttribute('disabled');
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<fieldset disabled={false} />).toHaveProperty('disabled', false);
    expect(<fieldset disabled={false} />).not.toHaveAttribute('disabled');
  });

  it('should have `name` attribute', () => {
    expect(<fieldset name="here" />).toHaveProperty('name', 'here');
    expect(<fieldset name="here" />).toHaveAttribute('name', 'here');
  });
});
