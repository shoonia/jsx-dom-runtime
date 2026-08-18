import { vi } from 'vitest';

describe('CustomEvent', () => {
  it('should add `my-event` handler', () => {
    const spy: JSX.EventListener = vi.fn(() => null);

    const div = <div on:my-event={spy} />;

    div.dispatchEvent(new CustomEvent('my-event'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add register sensitive event listeners', () => {
    const lowerCaseSpy: JSX.EventListener = vi.fn(() => null);
    const camelCaseSpy: JSX.EventListener = vi.fn(() => null);

    const div = <div
      on:x-event={lowerCaseSpy}
      on:x-Event={camelCaseSpy}
    />;

    div.dispatchEvent(new CustomEvent('x-event'));
    div.dispatchEvent(new CustomEvent('x-Event'));

    expect(lowerCaseSpy).toHaveBeenCalledTimes(1);
    expect(camelCaseSpy).toHaveBeenCalledTimes(1);
  });
});
