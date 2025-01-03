import { jest } from '@jest/globals';

describe('CustomEvent', () => {
  it('should add `my-event` handler', () => {
    const spy: JSX.EventListener = jest.fn();

    const div = <div on:my-event={spy} />;

    div.dispatchEvent(new CustomEvent('my-event'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add register sensitive event listeners', () => {
    const lowerCaseSpy: JSX.EventListener = jest.fn();
    const camelCaseSpy: JSX.EventListener = jest.fn();

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
