import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('TransitionEvent', () => {
  it('should add `on:transitionStart` handler', () => {
    using spy: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionStart(<div on:transitionStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionRun` handler', () => {
    using spy: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionRun(<div on:transitionRun={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionEnd` handler', () => {
    using spy: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionEnd(<div on:transitionEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionCancel` handler', () => {
    using spy: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionCancel(<div on:transitionCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('TransitionEvent Object Listener', () => {
  it('should add `on:transitionStart` object listener', () => {
    using handleEvent: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionStart(<div on:transitionStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionRun` object listener', () => {
    using handleEvent: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionRun(<div on:transitionRun={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionEnd` object listener', () => {
    using handleEvent: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionEnd(<div on:transitionEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionCancel` object listener', () => {
    using handleEvent: JSX.TransitionEventListener<HTMLDivElement> = jest.fn();

    fireEvent.transitionCancel(<div on:transitionCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
