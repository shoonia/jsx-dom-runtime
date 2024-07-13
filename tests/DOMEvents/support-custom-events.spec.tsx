import { jest } from '@jest/globals';

describe('support custom events', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('shuld add CustomEvent listener', () => {
    const spy = jest.fn();
    const div = <div on:custom-event={spy} /> as HTMLElement;

    div.dispatchEvent(new CustomEvent('custom-event'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Event names are case-sensitive', () => {
    const spy = jest.fn();
    const div = <div on:Custom-Event={spy} /> as HTMLElement;

    div.dispatchEvent(new CustomEvent('Custom-Event'));
    div.dispatchEvent(new CustomEvent('Custom-Event'));
    // should be ignored
    div.dispatchEvent(new CustomEvent('custom-event'));

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('Event names are case-sensitive #2', () => {
    const spy = jest.fn();
    // @ts-expect-error
    const div = <div on:MyEvent={spy} /> as HTMLElement;

    div.dispatchEvent(new CustomEvent('MyEvent'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should support CustomEvent in Custom Element', () => {
    const spy = jest.fn();
    const web = <web-component on:custom-event={spy}></web-component> as HTMLElement;

    web.dispatchEvent(new CustomEvent('custom-event'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should be transform correct', async () => {
    await expect('<div onclick={fn1} on:click={fn2} on:custom-event={fn3} on:CustomEvent={fn4} />')
      .toBeTransform(i + '_jsx("div",{onclick:fn1,$:{click:fn2,"custom-event":fn3,CustomEvent:fn4}});');
  });

  it('should be transform correct in Custom Element', async () => {
    await expect('<web-component on:custom-event={handler}></web-component>')
      .toBeTransform(i + '_jsx("web-component",{$:{"custom-event":handler}});');
  });
});
