import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

import type { EventHandlerObject } from '../../index';

describe('EventHandlerObject', () => {
  it('should support class as an event listener', () => {
    const spy = jest.fn();

    class ClickHandler implements EventHandlerObject {
      handleEvent(event: Event) {
        spy(event);
        expect(event.target).toBeInstanceOf(HTMLDivElement);
        expect(event.currentTarget).toBeInstanceOf(HTMLDivElement);
      }
    }

    fireEvent.click(<div on:click={new ClickHandler} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Event));
  });

  it('should have correct types', () => {
    const spy = jest.fn();

    const handler: EventHandlerObject<Event, HTMLButtonElement> = {
      handleEvent(event) {
        // @ts-expect-error
        const target1: HTMLButtonElement = event.target;
        const target2: HTMLButtonElement = event.currentTarget;

        spy(target1, target2);
      },
    };

    fireEvent.click(<button on:click={handler} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(HTMLButtonElement), expect.any(HTMLButtonElement));
  });
});
