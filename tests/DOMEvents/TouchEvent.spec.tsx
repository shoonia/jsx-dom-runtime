import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('TouchEvent', () => {
  it('should add `on:touchStart` handler', () => {
    using spy: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchStart(<div on:touchStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` handler', () => {
    using spy: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchEnd(<div on:touchEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` handler', () => {
    using spy: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchCancel(<div on:touchCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` handler', () => {
    using spy: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchMove(<div on:touchMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('TouchEvent Object Listener', () => {
  it('should add `on:touchStart` object listener', () => {
    using handleEvent: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchStart(<div on:touchStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` object listener', () => {
    using handleEvent: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchEnd(<div on:touchEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` object listener', () => {
    using handleEvent: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchCancel(<div on:touchCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` object listener', () => {
    using handleEvent: JSX.TouchEventListener<HTMLDivElement> = jest.fn();

    fireEvent.touchMove(<div on:touchMove={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
