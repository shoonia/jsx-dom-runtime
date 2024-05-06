import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('CompositionEvent', () => {
  it('should add `on:compositionStart` handler', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionStart(<input on:compositionStart={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionEnd` handler', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionEnd(<input on:compositionEnd={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionUpdate` handler', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionUpdate(<input on:compositionUpdate={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('CompositionEvent Object Listener', () => {
  it('should add `on:compositionStart` object listener', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionStart(<input on:compositionStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionEnd` object listener', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionEnd(<input on:compositionEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionUpdate` object listener', () => {
    const handleEvent: JSX.CompositionEventListener<HTMLInputElement> = jest.fn();

    fireEvent.compositionUpdate(<input on:compositionUpdate={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
