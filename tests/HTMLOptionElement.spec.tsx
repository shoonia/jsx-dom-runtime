describe('HTMLOptionElement', () => {
  it('should have `selected` attribute', () => {
    expect(<option selected />).toHaveProperty('selected', true);
    expect(<option selected />).toHaveAttribute('selected', '');
  });

  it('should NOT have `selected` attribute', () => {
    expect(<option selected={false} />).toHaveProperty('selected', false);
    expect(<option selected={false} />).not.toHaveAttribute('selected', '');
  });

  it('should have `disabled` attribute', () => {
    expect(<option disabled />).toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<option disabled="" />).toBeDisabled();
    expect(<option disabled="disabled" />).toBeDisabled();
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<option disabled={false} />).not.toBeDisabled();
  });

  it('should have `label` attribute', () => {
    expect(<option label="test" />).toHaveProperty('label', 'test');
    expect(<option label="test" />).toHaveAttribute('label', 'test');
  });

  it('should have `value` attribute', () => {
    expect(<option value="data" />).toHaveValue('data');
  });
});
