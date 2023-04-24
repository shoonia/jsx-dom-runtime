import { jest } from '@jest/globals';

describe('HTMLDialogElement', () => {
  it('should have `open` attribute', () => {
    expect(<dialog open />).toHaveAttribute('open');
    expect(<dialog open />).toHaveProperty('open', true);

    expect(<dialog open={false} />).not.toHaveAttribute('open');
    expect(<dialog open={false} />).toHaveProperty('open', false);
  });

  it('should add `ontoggle` handler', () => {
    const spy = jest.fn();

    expect(<dialog ontoggle={spy} />).toHaveProperty('ontoggle', spy);
  });
});