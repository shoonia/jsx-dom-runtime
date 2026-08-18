import { vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

describe('TouchEvent', () => {
  it('should add `on:touchStart` handler', () => {
    const spy: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchStart(<div on:touchStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` handler', () => {
    const spy: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchEnd(<div on:touchEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` handler', () => {
    const spy: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchCancel(<div on:touchCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` handler', () => {
    const spy: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchMove(<div on:touchMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('TouchEvent Object Listener', () => {
  it('should add `on:touchStart` object listener', () => {
    const handleEvent: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchStart(<div on:touchStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` object listener', () => {
    const handleEvent: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchEnd(<div on:touchEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` object listener', () => {
    const handleEvent: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchCancel(<div on:touchCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` object listener', () => {
    const handleEvent: JSX.TouchEventListener<HTMLDivElement> = vi.fn(() => null);

    fireEvent.touchMove(<div on:touchMove={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
