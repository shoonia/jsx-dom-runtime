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

  it('should have `type` property', () => {
    expect(<button prop:type="reset" />).toHaveProperty('type', 'reset');
  });

    it('should have `command` property', () => {
      expect(<button prop:command="request-close" />).toHaveProperty('command', 'request-close');
    });

    it('should have `commandForElement` property', () => {
      const el = document.createElement('div');
      expect(<button prop:commandForElement={el} />).toHaveProperty('commandForElement', el);
    });

    it('should have `disabled` property', () => {
      expect(<button prop:disabled={true} />).toHaveProperty('disabled', true);
      expect(<button prop:disabled={false} />).toHaveProperty('disabled', false);
    });

    it('should have `formAction` property', () => {
      expect(<button prop:formAction="/action" />).toHaveProperty('formAction', '/action');
    });

    it('should have `formEnctype` property', () => {
      expect(<button prop:formEnctype="multipart/form-data" />).toHaveProperty('formEnctype', 'multipart/form-data');
    });

    it('should have `formMethod` property', () => {
      expect(<button prop:formMethod="post" />).toHaveProperty('formMethod', 'post');
    });

    it('should have `formNoValidate` property', () => {
      expect(<button prop:formNoValidate={true} />).toHaveProperty('formNoValidate', true);
      expect(<button prop:formNoValidate={false} />).toHaveProperty('formNoValidate', false);
    });

    it('should have `formTarget` property', () => {
      expect(<button prop:formTarget="_blank" />).toHaveProperty('formTarget', '_blank');
    });

    it('should have `name` property', () => {
      expect(<button prop:name="btnName" />).toHaveProperty('name', 'btnName');
    });

    it('should have `value` property', () => {
      expect(<button prop:value="val123" />).toHaveProperty('value', 'val123');
    });

    it('should have `popoverTargetAction` property', () => {
      expect(<button prop:popoverTargetAction="show" />).toHaveProperty('popoverTargetAction', 'show');
      expect(<button prop:popoverTargetAction="hide" />).toHaveProperty('popoverTargetAction', 'hide');
      expect(<button prop:popoverTargetAction="toggle" />).toHaveProperty('popoverTargetAction', 'toggle');
    });
});
