import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('PointerEvent', () => {
  it('should add `on:pointerDown` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerDown(<span on:pointerDown={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerMove` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerMove(<span on:pointerMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerUp` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerUp(<span on:pointerUp={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerCancel` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerCancel(<span on:pointerCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerEnter` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerEnter(<span on:pointerEnter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerLeave` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerLeave(<span on:pointerLeave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOver` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerOver(<span on:pointerOver={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOut` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerOut(<span on:pointerOut={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:gotPointerCapture` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.gotPointerCapture(<span on:gotPointerCapture={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:lostPointerCapture` handler', () => {
    const spy: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.lostPointerCapture(<span on:lostPointerCapture={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('PointerEvent Object Listener', () => {
  it('should add `on:pointerDown` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerDown(<span on:pointerDown={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerMove` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerMove(<span on:pointerMove={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerUp` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerUp(<span on:pointerUp={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerCancel` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerCancel(<span on:pointerCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerEnter` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerEnter(<span on:pointerEnter={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerLeave` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerLeave(<span on:pointerLeave={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOver` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerOver(<span on:pointerOver={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOut` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.pointerOut(<span on:pointerOut={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:gotPointerCapture` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.gotPointerCapture(<span on:gotPointerCapture={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:lostPointerCapture` object listener', () => {
    const handleEvent: JSX.PointerEventListener<HTMLSpanElement> = jest.fn();

    fireEvent.lostPointerCapture(<span on:lostPointerCapture={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
