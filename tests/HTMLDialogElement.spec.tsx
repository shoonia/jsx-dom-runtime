import { jest } from '@jest/globals';

describe('HTMLDialogElement', () => {
  it('should have `open` attribute', () => {
    expect(<dialog open />).toHaveAttribute('open');
    expect(<dialog open />).toHaveProperty('open', true);
  });

  it('should NOT have `open` attribute', () => {
    expect(<dialog open={false} />).not.toHaveAttribute('open');
    expect(<dialog open={false} />).toHaveProperty('open', false);
  });

  it('should have `open` attribute with string value', () => {
    expect(<dialog open="" />).toHaveProperty('open', true);
  });

  it('should add `ontoggle` handler', () => {
    const spy = jest.fn();
    expect(<dialog ontoggle={spy} />).toHaveProperty('ontoggle', spy);
  });

  it('should add `oncancel` handler', () => {
    const spy = jest.fn();
    expect(<dialog oncancel={spy} />).toHaveProperty('oncancel', spy);
  });

  it('should add `onclose` handler', () => {
    const spy = jest.fn();
    expect(<dialog onclose={spy} />).toHaveProperty('onclose', spy);
  });
});
