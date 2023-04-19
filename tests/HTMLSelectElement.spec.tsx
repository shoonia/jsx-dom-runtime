describe('HTMLSelectElement', () => {
  it('should render a select', () => {
    expect(
      <select>
        <optgroup label="one">
          <option value="0" selected>0</option>
          <option value={1}>1</option>
        </optgroup>
        <optgroup label="two" disabled>
          <option disabled>2</option>
        </optgroup>
      </select>
    ).toHaveOuterHTML(
      '<select><optgroup label="one"><option value="0" selected="">0</option><option value="1">1</option></optgroup><optgroup label="two" disabled=""><option disabled="">2</option></optgroup></select>'
    );
  });

  it('should have `multiple` attribute', () => {
    expect(<select multiple />).toHaveProperty('multiple', true);
    expect(<select multiple />).toHaveAttribute('multiple', '');

    expect(<select multiple />).toHaveProperty('multiple', true);
    expect(<select multiple={true} />).toHaveAttribute('multiple', '');
  });

  it('should have `required` attribute', () => {
    expect(<select required />).toHaveProperty('required', true);
    expect(<select required />).toHaveAttribute('required', '');

    expect(<select required />).toHaveProperty('required', true);
    expect(<select required={true} />).toHaveAttribute('required', '');
  });

  it('should have `size` attribute', () => {
    expect(<select size={4} />).toHaveProperty('size', 4);
    expect(<select size={4} />).toHaveAttribute('size', '4');
  });

  it('should have `name` attribute', () => {
    expect(<select name="test" />).toHaveProperty('name', 'test');
    expect(<select name="test" />).toHaveAttribute('name', 'test');
  });

  it('should have correct value of selected option', () => {
    const select = (
      <select>
        <option value="1">First</option>
        <option value="2" selected>Second</option>
        <option value="3">Third</option>
      </select>
    );

    expect(select).toHaveValue('2');
  });
});
