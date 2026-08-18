import { vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

import { jsx } from 'jsx-dom-runtime';

describe('$', () => {
  it('should add a few handlers', () => {
    const spyClick: JSX.EventListener = vi.fn(() => null);
    const spyChange: JSX.EventListener = vi.fn(() => null);
    const input = <input on:click={spyClick} on:change={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add event listener with prop:* directive', () => {
    const click: JSX.EventListener = vi.fn(() => null);

    <div
      prop:onclick={click}
      ref={(div) => div.click()}
    />;

    expect(click).toHaveBeenCalledTimes(1);
  });

  it('should add event listener in $ props #1', () => {
    const click: JSX.EventListener = vi.fn(() => null);
    const myEvent: JSX.EventListener = vi.fn(() => null);

    <div
      $={{
        click,
        'my-event': myEvent,
      }}
      ref={(div) => {
        div.click();
        div.dispatchEvent(new CustomEvent('my-event'));
      }}
    />;

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });

  it('should add event listener in $ props #2', () => {
    const click: JSX.EventListener = vi.fn(() => null);
    const myEvent: JSX.EventListener = vi.fn(() => null);

    jsx('div', {
      $: {
        click,
        'my-event': myEvent,
      },
      ref(div) {
        div.click();
        div.dispatchEvent(new CustomEvent('my-event'));
      }
    });

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });

  it('should add event object listener in $ props (#3)', () => {
    const click: JSX.EventListener = vi.fn(() => null);
    const myEvent: JSX.EventListener = vi.fn(() => null);

    <div
      $={{
        click: { handleEvent: click },
        'my-event': { handleEvent: myEvent }
      }
      }
      ref={(div) => {
        div.click();
        div.dispatchEvent(new CustomEvent('my-event'));
      }}
    />;

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });

  it('should add object event listener in $ props (#4)', () => {
    const click: JSX.EventListener = vi.fn(() => null);
    const myEvent: JSX.EventListener = vi.fn(() => null);

    jsx('div', {
      $: {
        click: { handleEvent: click },
        'my-event': { handleEvent: myEvent },
      },
      ref(div) {
        div.click();
        div.dispatchEvent(new CustomEvent('my-event'));
      }
    });

    expect(click).toHaveBeenCalledTimes(1);
    expect(myEvent).toHaveBeenCalledTimes(1);
  });
});
