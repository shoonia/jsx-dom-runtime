describe('HTMLOptGroupElement', () => {
  it('should have `disabled` attribute', () => {
    expect(<optgroup disabled />).toHaveProperty('disabled', true);
    expect(<optgroup disabled />).toHaveAttribute('disabled');
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<optgroup disabled={false} />).toHaveProperty('disabled', false);
    expect(<optgroup disabled={false} />).not.toHaveAttribute('disabled');
  });

  it('should have `label` attribute', () => {
    expect(<optgroup label="here" />).toHaveProperty('label', 'here');
    expect(<optgroup label="here" />).toHaveAttribute('label', 'here');
  });
});
