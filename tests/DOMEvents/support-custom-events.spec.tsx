import { jest } from '@jest/globals';

describe('support custom events', () => {
  it('shuld add CustomEvent listener', () => {
    const spy = jest.fn();
    const div = <div on:custom-event={spy} /> as HTMLElement;

    div.dispatchEvent(new CustomEvent('custom-event'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Event names are case-sensitive.', () => {
    const spy = jest.fn();
    const div = <div on:Custom-Event={spy} /> as HTMLElement;

    div.dispatchEvent(new CustomEvent('Custom-Event'));
    div.dispatchEvent(new CustomEvent('Custom-Event'));
    // should be ignored
    div.dispatchEvent(new CustomEvent('custom-event'));

    expect(spy).toHaveBeenCalledTimes(2);
  });
});
