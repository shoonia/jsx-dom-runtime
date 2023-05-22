import { jest } from '@jest/globals';

describe('HTMLTextAreaElement', () => {
  it('should set name', () => {
    expect(<textarea name="field" />).toHaveAttribute('name', 'field');
    expect(<textarea name="field" />).toHaveProperty('name', 'field');
  });

  it('should have `maxLength` attribute', () => {
    expect(<textarea maxLength={10} />).toHaveProperty('maxLength', 10);
    expect(<textarea maxLength={10} />).toHaveAttribute('maxlength', '10');
  });

  it('should have `minLength` attribute', () => {
    expect(<textarea minLength={11} />).toHaveProperty('minLength', 11);
    expect(<textarea minLength={11} />).toHaveAttribute('minlength', '11');
  });

  it('should set cols', () => {
    expect(<textarea cols={15} />).toHaveProperty('cols', 15);
    expect(<textarea cols={15} />).toHaveAttribute('cols', '15');
  });

  it('should set rows', () => {
    expect(<textarea rows={20} />).toHaveProperty('rows', 20);
    expect(<textarea rows={20} />).toHaveAttribute('rows', '20');
  });

  it('should set placeholder', () => {
    expect(<textarea placeholder="data" />).toHaveProperty('placeholder', 'data');
    expect(<textarea placeholder="data" />).toHaveAttribute('placeholder', 'data');
  });

  it('should have `required` attribute', () => {
    expect(<textarea required />).toBeRequired();
  });

  it('should have `required` attribute with string value', () => {
    expect(<textarea required="" />).toBeRequired();
  });

  it('should NOT have `required` attribute', () => {
    expect(<textarea required={false} />).not.toBeRequired();
  });

  it('should have `readOnly` attribute', () => {
    expect(<textarea readOnly />).toHaveProperty('readOnly', true);
    expect(<textarea readOnly />).toHaveAttribute('readonly', '');
  });

  it('should have correct attribute value `readOnly` with string value', () => {
    expect(<textarea readOnly="" />).toHaveProperty('readOnly', true);
  });

  it('should NOT have `readOnly` attribute', () => {
    expect(<textarea readOnly={false} />).toHaveProperty('readOnly', false);
    expect(<textarea readOnly={false} />).not.toHaveAttribute('readonly');
  });

  it('should have `autofocus` attribute', () => {
    expect(<textarea autofocus />).toHaveProperty('autofocus', true);
    expect(<textarea autofocus />).toHaveAttribute('autofocus', '');
  });

  it('should NOT have `autofocus` attribute', () => {
    expect(<textarea autofocus={false} />).toHaveProperty('autofocus', false);
    expect(<textarea autofocus={false} />).not.toHaveAttribute('autofocus');
  });

  it('should have `autofocus` attribute with string value', () => {
    expect(<textarea autofocus="" />).toHaveProperty('autofocus', true);
  });

  it('should set text content', () => {
    expect(<textarea>content text</textarea>).toHaveValue('content text');
    expect(<textarea>content text</textarea>).toHaveTextContent('content text');
    expect(<textarea>content text</textarea>).toHaveInnerHTML('content text');
  });

  it('should have `value` attribute', () => {
    expect(<textarea value="hello" />).toHaveValue('hello');
  });

  it('should have `dirName` attribute', () => {
    expect(<textarea dirName="hello.dir" />).toHaveProperty('dirName', 'hello.dir');
    expect(<textarea dirName="hello.dir" />).toHaveAttribute('dirname', 'hello.dir');
  });

  it('should have `wrap` attribute', () => {
    expect(<textarea wrap="hard" />).toHaveProperty('wrap', 'hard');
    expect(<textarea wrap="off" />).toHaveAttribute('wrap', 'off');
  });

  it('should have `autocomplete` attribute', () => {
    expect(<textarea autocomplete="on" />).toHaveProperty('autocomplete', 'on');
    expect(<textarea autocomplete="on" />).toHaveAttribute('autocomplete', 'on');
  });

  it('should have `onchange` handler', () => {
    const spy = jest.fn();

    expect(<textarea onchange={spy} />).toHaveProperty('onchange', spy);
  });
});
