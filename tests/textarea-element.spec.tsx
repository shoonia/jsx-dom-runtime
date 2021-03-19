describe('HTMLTextAreaElement', () => {
  it('should set name', () => {
    expect(<textarea name="field" />).toHaveAttribute('name', 'field');
    expect(<textarea name="field" />).toHaveProperty('name', 'field');
  });

  it('should set maxLength / minLength', () => {
    expect(<textarea maxLength={10} />).toHaveProperty('maxLength', 10);
    expect(<textarea minLength={11} />).toHaveProperty('minLength', 11);
    expect(<textarea maxLength={10} />).toHaveAttribute('maxlength', '10');
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

  it('should set required', () => {
    expect(<textarea required />).toHaveProperty('required', true);
    expect(<textarea required />).toHaveAttribute('required');
    expect(<textarea required={false} />).toHaveProperty('required', false);
    expect(<textarea required={false} />).not.toHaveAttribute('required');
  });

  it('should set readOnly', () => {
    expect(<textarea readOnly />).toHaveProperty('readOnly', true);
    expect(<textarea readOnly={false} />).toHaveProperty('readOnly', false);
    expect(<textarea readOnly />).toHaveAttribute('readonly');
    expect(<textarea readOnly={false} />).not.toHaveAttribute('readonly');

    expect(<textarea readonly />).toHaveProperty('readOnly', true);
    expect(<textarea readonly={false} />).toHaveProperty('readOnly', false);
    expect(<textarea readonly />).toHaveAttribute('readonly');
    expect(<textarea readonly={false} />).not.toHaveAttribute('readonly');
  });

  it('should have correct attribute value `autofocus`', () => {
    expect(<textarea autofocus />).toHaveProperty('autofocus', true);
    expect(<textarea autofocus />).toHaveAttribute('autofocus', '');
    expect(<textarea autofocus={true} />).toHaveProperty('autofocus', true);
    expect(<textarea autofocus={true} />).toHaveAttribute('autofocus', '');
    expect(<textarea autofocus={false} />).toHaveProperty('autofocus', false);
    expect(<textarea autofocus={false} />).not.toHaveAttribute('autofocus');

    expect(<textarea autoFocus />).toHaveProperty('autofocus', true);
    expect(<textarea autoFocus />).toHaveAttribute('autofocus', '');
    expect(<textarea autoFocus={true} />).toHaveProperty('autofocus', true);
    expect(<textarea autoFocus={true} />).toHaveAttribute('autofocus', '');
    expect(<textarea autoFocus={false} />).toHaveProperty('autofocus', false);
    expect(<textarea autoFocus={false} />).not.toHaveAttribute('autofocus');
  });

  it('should set text content', () => {
    expect(<textarea>content text</textarea>).toHaveProperty('value', 'content text');
    expect(<textarea>content text</textarea>).toHaveProperty('textContent', 'content text');
    expect(<textarea>content text</textarea>).toHaveProperty('innerHTML', 'content text');
  });

  it('should append new content to the end', () => {
    const TextArea = <textarea>1</textarea>;

    expect(TextArea.textContent).toBe( '1');
    <TextArea>2</TextArea>;
    expect(TextArea.textContent).toBe('12');
  });

  it('should replace content', () => {
    const TextArea = <textarea>1</textarea>;

    expect(TextArea.textContent).toBe('1');
    <TextArea textContent="2" />;
    expect(TextArea.textContent).toBe('2');
    <TextArea innerHTML="3" />;
    expect(TextArea.textContent).toBe('3');
  });
});
