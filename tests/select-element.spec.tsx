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
});
