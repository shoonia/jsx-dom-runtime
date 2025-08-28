/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('WheelEvent', () => {
  it('should add `onwheel` handler', () => {
    const spy: JSX.WheelEventListener<HTMLDivElement> = jest.fn();

    fireEvent.wheel(<div onwheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:wheel` function listener', () => {
    const spy: JSX.WheelEventListener<HTMLDivElement> = jest.fn();

    fireEvent.wheel(<div on:wheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:wheel` object listener', () => {
    const handleEvent: JSX.WheelEventListener<HTMLDivElement> = jest.fn();

    fireEvent.wheel(<div on:wheel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
