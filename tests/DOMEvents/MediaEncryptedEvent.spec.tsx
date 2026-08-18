import { vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

describe('MediaEncryptedEvent', () => {
  it('should add `on:encrypted` funcrion listener', () => {
    const spy: JSX.MediaEncryptedEventListener<HTMLVideoElement> = vi.fn(() => {});

    fireEvent.encrypted(<video on:encrypted={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:encrypted` object listener', () => {
    const handleEvent: JSX.MediaEncryptedEventListener<HTMLVideoElement> = vi.fn(() => {});

    fireEvent.encrypted(<video on:encrypted={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
