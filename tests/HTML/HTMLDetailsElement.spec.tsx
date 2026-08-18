/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { vi } from 'vitest';

describe('HTMLDetailsElement', () => {
  it('should render details with summary', () => {
    expect(
      <details>
        <summary>Title</summary>
        Description
      </details>
    ).toHaveOuterHTML('<details><summary>Title</summary>Description</details>');
  });

  it('should have `open` attribute', () => {
    expect(<details open />).toHaveAttribute('open');
    expect(<details open />).toHaveProperty('open', true);
  });

  it('should NOT have `open` attribute', () => {
    expect(<details open={false} />).not.toHaveAttribute('open');
    expect(<details open={false} />).toHaveProperty('open', false);
  });

  it('should have `open` attribute with string value', () => {
    expect(<details open="" />).toHaveProperty('open', true);
  });

  it('should have `open` property', () => {
    expect(<details prop:open />).toHaveProperty('open', true);
  });

  it('should have `name` attribute', () => {
    expect(<details name="details-name" />).toHaveAttribute('name', 'details-name');
  });

  it('should update `name` property', () => {
    expect(<details prop:name="custom-name" />).toHaveProperty('name', 'custom-name');
  });

  it('should add `ontoggle` handler', () => {
    const spy = vi.fn(() => null);

    expect(<details ontoggle={spy} />).toHaveProperty('ontoggle', spy);
  });

});
