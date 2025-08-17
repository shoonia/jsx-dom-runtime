import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('PictureInPictureEvent', () => {
  it('should add `onresize` handler', () => {
    using spy: JSX.PictureInPictureEventListener<HTMLVideoElement> = jest.fn();

    fireEvent.resize(<video onresize={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:resize` handler', () => {
    using spy: JSX.PictureInPictureEventListener<HTMLVideoElement> = jest.fn();

    fireEvent.resize(<video on:resize={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:resize` object listener', () => {
    using handleEvent: JSX.PictureInPictureEventListener<HTMLVideoElement> = jest.fn();

    fireEvent.resize(<video on:resize={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
