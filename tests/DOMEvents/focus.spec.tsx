import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('Focus Events', () => {
  it('should add `onfocus` handler', () => {
    const spy = jest.fn();
    const input = <input onfocus={spy} />;

    fireEvent.focus(input);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onblur` handler', () => {
    const spy = jest.fn();
    const input = <input onblur={spy} />;

    fireEvent.blur(input);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});