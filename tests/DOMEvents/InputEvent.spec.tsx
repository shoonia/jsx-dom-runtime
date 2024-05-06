import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

const beforeInput = (node: Node) => fireEvent(node, createEvent('beforeinput', node));

describe('InputEvent', () => {
  it('should add `oninput` handler', () => {
    const spy: JSX.InputEventListener<HTMLInputElement> = jest.fn();

    fireEvent.input(<input oninput={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:input` handler', () => {
    const spy: JSX.InputEventListener<HTMLInputElement> = jest.fn();

    fireEvent.input(<input on:input={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:beforeInput` handler', () => {
    const spy: JSX.InputEventListener<HTMLInputElement> = jest.fn();

    beforeInput(<input on:beforeInput={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('InputEvent Object Listener', () => {
  it('should add `on:input` handler', () => {
    const handleEvent: JSX.InputEventListener<HTMLInputElement> = jest.fn();

    fireEvent.input(<input on:input={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:beforeInput` handler', () => {
    const handleEvent: JSX.InputEventListener<HTMLInputElement> = jest.fn();

    beforeInput(<input on:beforeInput={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
