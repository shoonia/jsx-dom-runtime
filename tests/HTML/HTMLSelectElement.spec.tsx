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

  it('should have `autofocus` attribute with string value', () => {
    expect(<select autofocus="" />).toHaveProperty('autofocus', true);
  });

  it('should have `multiple` attribute', () => {
    expect(<select multiple />).toHaveProperty('multiple', true);
    expect(<select multiple />).toHaveAttribute('multiple', '');
  });

  it('should have `multiple` attribute with string value', () => {
    expect(<select multiple="" />).toHaveProperty('multiple', true);
  });

  it('should NOT have `multiple` attribute', () => {
    expect(<select multiple={false} />).toHaveProperty('multiple', false);
    expect(<select multiple={false} />).not.toHaveAttribute('multiple');
  });

  it('should have `required` attribute', () => {
    expect(<select required />).toBeRequired();
  });

  it('should have `required` with string value', () => {
    expect(<select required="" />).toBeRequired();
  });

  it('should NOT have `required` attribute', () => {
    expect(<select required={false} />).not.toBeRequired();
  });

  it('should have `disabled` attribute', () => {
    expect(<select disabled />).toBeDisabled();
  });

  it('should have `disabled` attribute with string value', () => {
    expect(<select disabled="" />).toBeDisabled();
  });

  it('should NOT have `disabled` attribute', () => {
    expect(<select disabled={false} />).not.toBeDisabled();
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
   /* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
    expect(<select onchange={spy} />).toHaveProperty('onchange', spy);
  });

  it('should have `selectedIndex` property', () => {
    expect(
      <select prop:selectedIndex={2}>
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
      </select>
    ).toHaveProperty('selectedIndex', 2);
    expect(
      <select prop:selectedIndex={2}>
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
      </select>
    ).not.toHaveAttribute('selectedindex');
  });

  it('should set `value` property via prop:', () => {
      expect(
      <select prop:value="2">
        <option value="1">First</option>
        <option value="2">Second</option>
      </select>
    ).toHaveValue('2');
  });

  it('should set `autocomplete` property via prop:', () => {
    expect(<select prop:autocomplete="on" />).toHaveProperty('autocomplete', 'on');
    expect(<select prop:autocomplete="on" />).not.toHaveAttribute('autocomplete');
  });

  it('should set `disabled` property via prop:', () => {
    expect(<select prop:disabled={true} />).toHaveProperty('disabled', true);
    expect(<select prop:disabled={true} />).toHaveAttribute('disabled', '');
  });

  it('should set `multiple` property via prop:', () => {
    expect(<select prop:multiple={true} />).toHaveProperty('multiple', true);
    expect(<select prop:multiple={true} />).toHaveAttribute('multiple', '');
  });

  it('should set `required` property via prop:', () => {
    expect(<select prop:required={true} />).toHaveProperty('required', true);
    expect(<select prop:required={true} />).toHaveAttribute('required', '');
  });

  it('should set `length` property via prop:', () => {
    expect(<select prop:length={5} />).toHaveProperty('length', 5);
  });

  it('should set `size` property via prop:', () => {
    expect(<select prop:size={4} />).toHaveProperty('size', 4);
  });

  it('should set `name` property via prop:', () => {
    expect(<select prop:name="my-select" />).toHaveProperty('name', 'my-select');
  });
});
