/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

describe('PictureInPictureEvent', () => {
  it('should add `onresize` handler', () => {
    const spy: JSX.PictureInPictureEventListener<HTMLVideoElement> = vi.fn(() => null);

    fireEvent.resize(<video onresize={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:resize` handler', () => {
    const spy: JSX.PictureInPictureEventListener<HTMLVideoElement> = vi.fn(() => null);

    fireEvent.resize(<video on:resize={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:resize` object listener', () => {
    const handleEvent: JSX.PictureInPictureEventListener<HTMLVideoElement> = vi.fn(() => null);

    fireEvent.resize(<video on:resize={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
