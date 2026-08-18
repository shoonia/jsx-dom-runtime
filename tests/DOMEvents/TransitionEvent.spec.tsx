import { vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

describe('TransitionEvent', () => {
  it('should add `on:transitionStart` handler', () => {
    const spy: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionStart(<div on:transitionStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionRun` handler', () => {
    const spy: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionRun(<div on:transitionRun={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionEnd` handler', () => {
    const spy: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionEnd(<div on:transitionEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionCancel` handler', () => {
    const spy: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionCancel(<div on:transitionCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('TransitionEvent Object Listener', () => {
  it('should add `on:transitionStart` object listener', () => {
    const handleEvent: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionStart(<div on:transitionStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionRun` object listener', () => {
    const handleEvent: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionRun(<div on:transitionRun={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionEnd` object listener', () => {
    const handleEvent: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionEnd(<div on:transitionEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionCancel` object listener', () => {
    const handleEvent: JSX.TransitionEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.transitionCancel(<div on:transitionCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
