import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('WheelEvent', () => {
  it('should add `onwheel` handler', () => {
    const spy = jest.fn();

    fireEvent.wheel(<div onwheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:wheel` handler', () => {
    const spy = jest.fn();

    fireEvent.wheel(<div on:wheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
