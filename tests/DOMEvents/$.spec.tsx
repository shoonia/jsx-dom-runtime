import { jest } from '@jest/globals';

import { jsx } from '../..';

describe('$', () => {
  it('should add event listener', () => {
    const click = jest.fn();
    const myEvent = jest.fn();

    const div = <div $={{click, 'my-event': myEvent}} /> as HTMLElement;

    div.click();
    div.dispatchEvent(new CustomEvent('my-event'));

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });

  it('should add event listener #2', () => {
    const click = jest.fn();
    const myEvent = jest.fn();

    const div = jsx('div', {
      $: {
        click,
        'my-event': myEvent,
      },
    });

    div.click();
    div.dispatchEvent(new CustomEvent('my-event'));

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });
});
