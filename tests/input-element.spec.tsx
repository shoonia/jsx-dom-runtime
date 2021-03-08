describe('HTMLInputElement', () => {
  it('should set value', () => {
    expect(<input type="text" value="test text" />).toHaveValue('test text');
    expect(<input type="number" value={7} />).toHaveValue(7);
  });

  it('should have max / min property', () => {
    const input = <input minLength={5} maxLength={10} />;

    expect(input).toHaveProperty('minLength', 5);
    expect(input).toHaveProperty('maxLength', 10);
  });

  it('should have size', () => {
    expect(<input size={24} />).toHaveProperty('size', 24);
  });

  it('should have autofocus', () => {
    expect(<input autofocus />).toHaveProperty('autofocus');
  });

  it('should be disabled', () => {
    expect(<input disabled />).toBeDisabled();
  });

  it('should be required', () => {
    expect(<input required />).toBeRequired();
  });

  it('should be required', () => {
    expect(<input readonly />).toHaveAttribute('readonly');
  });
});
