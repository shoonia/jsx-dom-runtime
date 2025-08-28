/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('[Form] Event', () => {
  it('should add `onchange` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.change(<form onchange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onreset` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.reset(<form onreset={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oninvalid` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.invalid(<form oninvalid={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:change` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.change(<form on:change={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:reset` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.reset(<form on:reset={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:invalid` handler', () => {
    const spy: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.invalid(<form on:invalid={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('[Form] Event Object Listener', () => {
  it('should add `on:change` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.change(<form on:change={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:reset` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.reset(<form on:reset={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:invalid` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLFormElement> = jest.fn();

    fireEvent.invalid(<form on:invalid={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
