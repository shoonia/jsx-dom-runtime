import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('MediaEncryptedEvent', () => {
  it('should add `on:encrypted` funcrion listener', () => {
    using spy: JSX.MediaEncryptedEventListener<HTMLVideoElement> = jest.fn();

    fireEvent.encrypted(<video on:encrypted={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:encrypted` object listener', () => {
    using handleEvent: JSX.MediaEncryptedEventListener<HTMLVideoElement> = jest.fn();

    fireEvent.encrypted(<video on:encrypted={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
