const off = [false, null, undefined];

describe('HTMLInputElement', () => {
  it('should set value', () => {
    expect(<input type="text" value="test text" />).toHaveValue('test text');
    expect(<input type="number" value={7} />).toHaveValue(7);
  });

  it('should have max property', () => {
    expect(<input maxLength={10} />).toHaveProperty('maxLength', 10);
    expect(<input maxLength={10} />).toHaveAttribute('maxlength', '10');
  });

  it('should have min property', () => {
    expect(<input minLength={10} />).toHaveProperty('minLength', 10);
    expect(<input minLength={10} />).toHaveAttribute('minlength', '10');
  });

  it('should have size', () => {
    expect(<input size={24} />).toHaveProperty('size', 24);
    expect(<input size={24} />).toHaveAttribute('size', '24');
  });

  it('should have `step attribute`', () => {
    expect(<input step={1} />).toHaveProperty('step', '1');
    expect(<input step={1} />).toHaveAttribute('step', '1');
  });

  it('should have correct attribute value `autofocus`', () => {
    expect(<input autofocus />).toHaveProperty('autofocus', true);
    expect(<input autofocus />).toHaveAttribute('autofocus', '');
  });

  it.each(off)('should NOT have attribute `autofocus`', (val) => {
    expect(<input autofocus={val} />).not.toHaveAttribute('autofocus');
    expect(<input autofocus={val} />).toHaveProperty('autofocus', false);
  });

  it('should have correct attribute value `disabled`', () => {
    expect(<input disabled />).toBeDisabled();
  });

  it.each(off)('should NOT have attribute `disabled`', (val) => {
    expect(<input disabled={val} />).not.toBeDisabled();
  });

  it('should have correct attribute value `required`', () => {
    expect(<input required />).toBeRequired();
  });

  it.each(off)('should NOT have attribute `required`', (val) => {
    expect(<input required={val} />).not.toBeRequired();
  });

  it('should have correct attribute value `required`', () => {
    expect(<input readOnly />).toHaveAttribute('readonly', '');
    expect(<input readOnly />).toHaveProperty('readOnly', true);
  });

  it.each(off)('should NOT have attribute `readonly`', (val) => {
    expect(<input readOnly={val} />).not.toHaveAttribute('readonly');
    expect(<input readOnly={val} />).toHaveProperty('readOnly', false);
  });

  it('should work with placeholder', () => {
    expect(<input type="text" placeholder="noop" />).toHaveProperty('placeholder', 'noop');
    expect(<input type="text" placeholder="noop" />).toHaveAttribute('placeholder', 'noop');
  });

  it('should work with checkbox', () => {
    expect(<input type="checkbox" checked />).toBeChecked();
    expect(<input type="checkbox" />).not.toBeChecked();
  });

  it('should work with radio button', () => {
    expect(<input type="radio" checked />).toBeChecked();
    expect(<input type="radio" />).not.toBeChecked();
  });

  it('should set inputMode', () => {
    expect(<input inputMode="numeric" />).toHaveProperty('inputMode', 'numeric');
    expect(<input inputMode="numeric" />).toHaveAttribute('inputmode', 'numeric');
  });

  it('should set autocomplete', () => {
    expect(<input autocomplete="off" />).toHaveProperty('autocomplete', 'off');
    expect(<input autocomplete="off" />).toHaveAttribute('autocomplete', 'off');
  });

  it('should set name', () => {
    expect(<input name="inp" />).toHaveProperty('name', 'inp');
    expect(<input name="inp" />).toHaveAttribute('name', 'inp');
  });

  it('should set enterkeyhint', () => {
    expect(<input enterKeyHint="go" />).toHaveAttribute('enterkeyhint', 'go');
  });

  it('should set pattern', () => {
    expect(<input pattern="[0-9]{3}" />).toHaveAttribute('pattern', '[0-9]{3}');
  });

  it('should set list', () => {
    expect(<input list="some-id" />).toHaveAttribute('list', 'some-id');
  });

  it('should have `dirName` attribute', () => {
    expect(<input dirName="hello.dir" />).toHaveProperty('dirName', 'hello.dir');
    expect(<input dirName="hello.dir" />).toHaveAttribute('dirname', 'hello.dir');
  });

  it('should have `placeholder` attribute', () => {
    expect(<input placeholder="text" />).toHaveProperty('placeholder', 'text');
    expect(<input placeholder="text" />).toHaveAttribute('placeholder', 'text');
  });
});
