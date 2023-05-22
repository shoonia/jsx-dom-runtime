describe('HTMLOptGroupElement', () => {
  it('should have `disabled` attribute', () => {
    expect(<optgroup disabled />).toBeDisabled();
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<optgroup disabled={false} />).not.toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<optgroup disabled="" />).toBeDisabled();
  });

  it('should have `label` attribute', () => {
    expect(<optgroup label="here" />).toHaveProperty('label', 'here');
    expect(<optgroup label="here" />).toHaveAttribute('label', 'here');
  });
});
