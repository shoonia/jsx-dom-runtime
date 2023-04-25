import { jest } from '@jest/globals';

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

  it('should have `autofocus` attribute', () => {
    expect(<select autofocus />).toHaveProperty('autofocus', true);
    expect(<select autofocus />).toHaveAttribute('autofocus', '');
  });

  it('should NOT have `autofocus` attribute', () => {
    expect(<select autofocus={false} />).toHaveProperty('autofocus', false);
    expect(<select autofocus={false} />).not.toHaveAttribute('autofocus');
  });

  it('should have `multiple` attribute', () => {
    expect(<select multiple />).toHaveProperty('multiple', true);
    expect(<select multiple />).toHaveAttribute('multiple', '');
  });

  it('should NOT have `multiple` attribute', () => {
    expect(<select multiple={false} />).toHaveProperty('multiple', false);
    expect(<select multiple={false} />).not.toHaveAttribute('multiple');
  });

  it('should have `required` attribute', () => {
    expect(<select required />).toHaveProperty('required', true);
    expect(<select required />).toHaveAttribute('required', '');
  });

  it('should NOT have `required` attribute', () => {
    expect(<select required={false} />).toHaveProperty('required', false);
    expect(<select required={false} />).not.toHaveAttribute('required');
  });

  it('should have `disabled` attribute', () => {
    expect(<select disabled />).toHaveProperty('disabled', true);
    expect(<select disabled />).toHaveAttribute('disabled', '');
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<select disabled={false} />).toHaveProperty('disabled', false);
    expect(<select disabled={false} />).not.toHaveAttribute('disabled');
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

  it('should add `onchange` handler', () => {
    const spy = jest.fn();

    expect(<select onchange={spy} />).toHaveProperty('onchange', spy);
  });
});
