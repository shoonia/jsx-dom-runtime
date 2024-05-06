import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

import { jsx } from '../..';

describe('$', () => {
  it('should add a few handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();
    const input = <input on:click={spyClick} on:change={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add event listener in $ props', () => {
    const click = jest.fn();
    const myEvent = jest.fn();

    const div = <div $={{click, 'my-event': myEvent}} /> as HTMLElement;

    div.click();
    div.dispatchEvent(new CustomEvent('my-event'));

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });

  it('should add event listener in $ props', () => {
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
