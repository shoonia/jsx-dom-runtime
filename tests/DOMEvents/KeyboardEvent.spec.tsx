import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('KeyboardEvent', () => {
  it('should add `onkeydown` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyDown(<input onkeydown={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onkeyup` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyUp(<input onkeyup={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onkeypress` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyPress(<input onkeypress={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyDown` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyDown(<input on:keyDown={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyUp` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyUp(<input on:keyUp={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyPress` handler', () => {
    const spy: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyPress(<input on:keyPress={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('KeyboardEvent Object Listener', () => {
  it('should add `on:keyDown` object listener', () => {
    const handleEvent: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyDown(<input on:keyDown={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyUp` object listener', () => {
    const handleEvent: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyUp(<input on:keyUp={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyPress` object listener', () => {
    const handleEvent: JSX.KeyboardEventListener<HTMLInputElement> = jest.fn();

    fireEvent.keyPress(<input on:keyPress={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
