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

  it('should NOT have `disabled` attribute', () => {
    expect(<button disabled={false} />).not.toBeDisabled();
  });

  it('should have `autofocus` attribute', () => {
    expect(<button autofocus />).toHaveProperty('autofocus', true);
    expect(<button autofocus />).toHaveAttribute('autofocus', '');
  });

  it('should NOT have `autofocus` attribute', () => {
    expect(<button autofocus={false} />).toHaveProperty('autofocus', false);
    expect(<button autofocus={false} />).not.toHaveAttribute('autofocus');
  });
});
