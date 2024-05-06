import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

import type { EventObject } from '../../index';

describe('EventObject', () => {
  it('should support class as an event listener', () => {
    const spy = jest.fn();

    class ClickHandler implements EventObject<Event, HTMLDivElement> {
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
});
