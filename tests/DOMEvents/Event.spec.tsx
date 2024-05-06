import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('Event: select', () => {
  it('should add `onselect` handler', () => {
    const spy: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input onselect={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` function listener', () => {
    const spy: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input on:select={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input on:select={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: load', () => {
  it('should add `onselect` handler', () => {
    const spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img onload={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` function listener', () => {
    const spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img on:load={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img on:load={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: error', () => {
  it('should add `onerror` handler', () => {
    const spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img onerror={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` function listener', () => {
    const spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img on:error={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img on:error={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
