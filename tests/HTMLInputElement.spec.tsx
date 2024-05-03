import { jest } from '@jest/globals';

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

  it('should have `autofocus` attribute with string value', () => {
    expect(<input autofocus="" />).toHaveProperty('autofocus', true);
  });

  it('should have correct attribute value `disabled`', () => {
    expect(<input disabled />).toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<input disabled="" />).toBeDisabled();
  });

  it('should have correct attribute value `required`', () => {
    expect(<input required />).toBeRequired();
  });

  it('should have correct attribute value `required` with string value', () => {
    expect(<input required="" />).toBeRequired();
  });

  it('should have correct attribute value `required`', () => {
    expect(<input readOnly />).toHaveAttribute('readonly', '');
    expect(<input readOnly />).toHaveProperty('readOnly', true);
  });

  it('should have correct attribute value `readOnly` string value', () => {
    expect(<input readOnly="" />).toHaveProperty('readOnly', true);
  });

  it('should work with placeholder', () => {
    expect(<input type="text" placeholder="noop" />).toHaveProperty('placeholder', 'noop');
    expect(<input type="text" placeholder="noop" />).toHaveAttribute('placeholder', 'noop');
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
    expect(<input dirName="rtl" />).toHaveProperty('dirName', 'rtl');
    expect(<input dirName="rtl" />).toHaveAttribute('dirname', 'rtl');
  });

  it('should have `placeholder` attribute', () => {
    expect(<input placeholder="text" />).toHaveProperty('placeholder', 'text');
    expect(<input placeholder="text" />).toHaveAttribute('placeholder', 'text');
  });

  it('should have `formNoValidate` attribute', () => {
    expect(<input formNoValidate />).toHaveProperty('formNoValidate', true);
    expect(<input formNoValidate />).toHaveAttribute('formnovalidate', '');
  });

  it('should have `formNoValidate` attribute with string value', () => {
    expect(<input formNoValidate="" />).toHaveProperty('formNoValidate', true);
  });

  it('should NOT have `formNoValidate` attribute', () => {
    expect(<input formNoValidate={false} />).toHaveProperty('formNoValidate', false);
    expect(<input formNoValidate={false} />).not.toHaveAttribute('formnovalidate');
  });

  describe('checkbox', () => {
    it('should have `checked` attribute', () => {
      expect(<input type="checkbox" checked />).toBeChecked();
    });

    it('should have `checked` attribute with string value', () => {
      expect(<input type="checkbox" checked="" />).toBeChecked();
    });

    it('should NOT have `checked` attribute', () => {
      expect(<input type="checkbox" checked={false} />).not.toBeChecked();
    });
  });

  describe('radio', () => {
    it('should have `checked` attribute', () => {
      expect(<input type="radio" checked />).toBeChecked();
    });

    it('should have `checked` attribute with string value', () => {
      expect(<input type="radio" checked="" />).toBeChecked();
    });

    it('should NOT have `checked` attribute', () => {
      expect(<input type="radio" checked={false} />).not.toBeChecked();
    });
  });

  describe('submit', () => {
    it('should have `formMethod` attribute', () => {
      expect(<input type="submit" formMethod="get" />).toHaveAttribute('formmethod', 'get');
    });

    it('should have `formAction` attribute', () => {
      expect(<input type="submit" formAction="/" />).toHaveAttribute('formaction', '/');
    });

    it('should have `onchange` handler', () => {
      const spy = jest.fn();

      expect(<input onchange={spy} />).toHaveProperty('onchange', spy);
    });

    it('should have `capture` attribute', () => {
      expect(<input type="file" capture />).toHaveAttribute('capture', '');
    });
  });
});
