import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('DragEvent', () => {
  it('should add `ondrag` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drag(<div ondrag={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragend` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnd(<div ondragend={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragenter` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnter(<div ondragenter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragleave` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragLeave(<div ondragleave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragover` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragOver(<div ondragover={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragstart` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragStart(<div ondragstart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondrop` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drop(<div ondrop={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drag` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drag(<div on:drag={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnd` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnd(<div on:dragEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnter` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnter(<div on:dragEnter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragLeave` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragLeave(<div on:dragLeave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragOver` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragOver(<div on:dragOver={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragStart` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragStart(<div on:dragStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragExit` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragExit(<div on:dragExit={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drop` handler', () => {
    const spy: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drop(<div on:drop={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('DragEvent Object Listener', () => {
  it('should add `on:drag` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drag(<div on:drag={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnd` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnd(<div on:dragEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnter` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragEnter(<div on:dragEnter={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragLeave` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragLeave(<div on:dragLeave={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragOver` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragOver(<div on:dragOver={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragStart` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragStart(<div on:dragStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragExit` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.dragExit(<div on:dragExit={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drop` object listener', () => {
    const handleEvent: JSX.DragEventListener<HTMLDivElement> = jest.fn();

    fireEvent.drop(<div on:drop={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
