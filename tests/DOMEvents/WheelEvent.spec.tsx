/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { fireEvent } from '@testing-library/dom';
import { vi } from 'vitest';

describe('WheelEvent', () => {
  it('should add `onwheel` handler', () => {
    const spy: JSX.WheelEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.wheel(<div onwheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:wheel` function listener', () => {
    const spy: JSX.WheelEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.wheel(<div on:wheel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:wheel` object listener', () => {
    const handleEvent: JSX.WheelEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.wheel(<div on:wheel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
