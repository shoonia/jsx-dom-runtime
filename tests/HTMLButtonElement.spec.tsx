describe('HTMLButtonElement', () => {
  it('should have `type` attribute', () => {
    expect(<button />).toHaveProperty('type', 'submit');
    expect(<button type="button" />).toHaveProperty('type', 'button');
  });

  it('should have `value` attribute', () => {
    expect(<button value="123" />).toHaveValue('123');
  });

  it('should have `name` attribute', () => {
    expect(<button name="btn" />).toHaveProperty('name', 'btn');
    expect(<button name="btn" />).toHaveAttribute('name', 'btn');
  });

  it('should have `disabled` attribute', () => {
    expect(<button disabled />).toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<button disabled="" />).toBeDisabled();
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<button disabled={false} />).not.toBeDisabled();
  });

  it('should have `autofocus` attribute', () => {
    expect(<button autofocus />).toHaveProperty('autofocus', true);
    expect(<button autofocus />).toHaveAttribute('autofocus', '');
  });

  it('should have `autofocus` attribute with string value', () => {
    expect(<button autofocus="" />).toHaveProperty('autofocus', true);
  });

  it('should NOT have `autofocus` attribute', () => {
    expect(<button autofocus={false} />).toHaveProperty('autofocus', false);
    expect(<button autofocus={false} />).not.toHaveAttribute('autofocus');
  });

  it('should have `formNoValidate` attribute', () => {
    expect(<button formNoValidate />).toHaveProperty('formNoValidate', true);
    expect(<button formNoValidate />).toHaveAttribute('formnovalidate', '');
  });

  it('should have `formNoValidate` attribute with string value', () => {
    expect(<button formNoValidate="" />).toHaveProperty('formNoValidate', true);
  });

  it('should NOT have `formNoValidate` attribute', () => {
    expect(<button formNoValidate={false} />).toHaveProperty('formNoValidate', false);
    expect(<button formNoValidate={false} />).not.toHaveAttribute('formnovalidate');
  });

  it('should have `formAction` attribute', () => {
    expect(<button formAction="/" />).toHaveAttribute('formaction', '/');
  });

  it('should have `formEnctype` attribute', () => {
    expect(<button formEnctype="text/plain" />).toHaveAttribute('formenctype', 'text/plain');
  });
});
