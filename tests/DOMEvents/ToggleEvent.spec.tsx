import { createEvent, fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

const toggle = (node: Node) => fireEvent(node, createEvent('toggle', node));

describe('ToggleEvent', () => {
  it('should add `on:toggle` function handler', () => {
    const spy: JSX.ToggleEventListener<HTMLDetailsElement> = jest.fn();

    toggle(<details on:toggle={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:toggle` object listener', () => {
    const handleEvent: JSX.ToggleEventListener<HTMLDetailsElement> = jest.fn();

    toggle(<details on:toggle={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
