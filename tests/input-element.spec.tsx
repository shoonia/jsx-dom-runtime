const off = [false, null, undefined];

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

  it('should have correct attribute value `autofocus`', () => {
    expect(<input autofocus />).toHaveProperty('autofocus', true);
    expect(<input autofocus />).toHaveAttribute('autofocus', '');
    expect(<input autofocus={true} />).toHaveProperty('autofocus', true);
    expect(<input autofocus={true} />).toHaveAttribute('autofocus', '');

    expect(<input autoFocus />).toHaveProperty('autofocus', true);
    expect(<input autoFocus />).toHaveAttribute('autofocus', '');
    expect(<input autoFocus={true} />).toHaveProperty('autofocus', true);
    expect(<input autoFocus={true} />).toHaveAttribute('autofocus', '');
  });

  it.each(off)('should not have attribute `autofocus`', (val) => {
    expect(<input autofocus={val} />).not.toHaveAttribute('autofocus');
    expect(<input autofocus={val} />).toHaveProperty('autofocus', false);

    expect(<input autoFocus={val} />).not.toHaveAttribute('autofocus');
    expect(<input autoFocus={val} />).toHaveProperty('autofocus', false);
  });

  it('should have correct attribute value `disabled`', () => {
    expect(<input disabled />).toBeDisabled();
    expect(<input disabled />).toHaveAttribute('disabled', '');
    expect(<input disabled={true} />).toBeDisabled();
    expect(<input disabled={true} />).toHaveAttribute('disabled', '');
  });

  it.each(off)('should not have attribute `disabled`', (val) => {
    expect(<input disabled={val} />).not.toHaveAttribute('disabled');
    expect(<input disabled={val} />).not.toBeDisabled();
  });

  it('should have correct attribute value `required`', () => {
    expect(<input required />).toBeRequired();
    expect(<input required />).toHaveAttribute('required', '');
    expect(<input required={true} />).toBeRequired();
    expect(<input required={true} />).toHaveAttribute('required', '');
  });

  it.each(off)('should not have attribute `required`', (val) => {
    expect(<input required={val} />).not.toHaveAttribute('required');
    expect(<input required={val} />).toHaveProperty('required', false);
  });

  it('should have correct attribute value `required`', () => {
    expect(<input readonly />).toHaveAttribute('readonly', '');
    expect(<input readonly />).toHaveProperty('readOnly', true);
    expect(<input readonly={true} />).toHaveAttribute('readonly', '');
    expect(<input readonly={true} />).toHaveProperty('readOnly', true);

    expect(<input readOnly />).toHaveAttribute('readonly', '');
    expect(<input readOnly />).toHaveProperty('readOnly', true);
    expect(<input readOnly={true} />).toHaveAttribute('readonly', '');
    expect(<input readOnly={true} />).toHaveProperty('readOnly', true);
  });

  it.each(off)('should not have attribute `readonly`', (val) => {
    expect(<input readOnly={val} />).not.toHaveAttribute('readonly');
    expect(<input readOnly={val} />).toHaveProperty('readOnly', false);

    expect(<input readonly={val} />).not.toHaveAttribute('readonly');
    expect(<input readonly={val} />).toHaveProperty('readOnly', false);
  });

  it('s', () => {
    expect(<input type="text" placeholder="noop" />).toHaveProperty('placeholder', 'noop');
    expect(<input type="text" placeholder="noop" />).toHaveAttribute('placeholder', 'noop');
  });

  it('should work with checkbox', () => {
    expect(<input type="checkbox" checked />).toHaveProperty('checked', true);
    expect(<input type="checkbox" checked={true} />).toHaveProperty('checked', true);
  });

  it('should work with radio button', () => {
    expect(<input type="radio" checked />).toHaveProperty('checked', true);
    expect(<input type="radio" checked={true} />).toHaveProperty('checked', true);
  });

  it('should set inputMode', () => {
    expect(<input inputMode="numeric" />).toHaveProperty('inputMode', 'numeric');
    expect(<input inputMode="numeric" />).toHaveAttribute('inputmode', 'numeric');

    expect(<input inputmode="numeric" />).toHaveProperty('inputMode', 'numeric');
    expect(<input inputmode="numeric" />).toHaveAttribute('inputmode', 'numeric');
  });

  it('should set autocomplete', () => {
    expect(<input autocomplete="off" />).toHaveProperty('autocomplete', 'off');
    expect(<input autocomplete="off" />).toHaveAttribute('autocomplete', 'off');

    expect(<input autoComplete="off" />).toHaveProperty('autocomplete', 'off');
    expect(<input autoComplete="off" />).toHaveAttribute('autocomplete', 'off');
  });

  it('should set name', () => {
    expect(<input name="inp" />).toHaveProperty('name', 'inp');
    expect(<input name="inp" />).toHaveAttribute('name', 'inp');
  });

  it('should set enterkeyhint', () => {
    expect(<input enterkeyhint="go" />).toHaveAttribute('enterkeyhint', 'go');
    expect(<input enterKeyHint="go" />).toHaveAttribute('enterkeyhint', 'go');
  });

  it('should set pattern', () => {
    expect(<input pattern="[0-9]{3}" />).toHaveAttribute('pattern', '[0-9]{3}');
  });
});
