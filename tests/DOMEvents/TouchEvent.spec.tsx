import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('TouchEvent', () => {
  it('should add `on:touchStart` handler', () => {
    const spy = jest.fn();

    fireEvent.touchStart(<div on:touchStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` handler', () => {
    const spy = jest.fn();

    fireEvent.touchEnd(<div on:touchEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` handler', () => {
    const spy = jest.fn();

    fireEvent.touchCancel(<div on:touchCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` handler', () => {
    const spy = jest.fn();

    fireEvent.touchMove(<div on:touchMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
