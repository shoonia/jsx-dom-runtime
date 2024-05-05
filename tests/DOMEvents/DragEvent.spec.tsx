import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('DragEvent', () => {
  it('should add `ondrag` handler', () => {
    const spy = jest.fn();

    fireEvent.drag(<div ondrag={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragend` handler', () => {
    const spy = jest.fn();

    fireEvent.dragEnd(<div ondragend={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragenter` handler', () => {
    const spy = jest.fn();

    fireEvent.dragEnter(<div ondragenter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragleave` handler', () => {
    const spy = jest.fn();

    fireEvent.dragLeave(<div ondragleave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragover` handler', () => {
    const spy = jest.fn();

    fireEvent.dragOver(<div ondragover={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragstart` handler', () => {
    const spy = jest.fn();

    fireEvent.dragStart(<div ondragstart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragexit` handler', () => {
    const spy = jest.fn();

    fireEvent.dragExit(<div ondragexit={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondrop` handler', () => {
    const spy = jest.fn();

    fireEvent.drop(<div ondrop={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drag` handler', () => {
    const spy = jest.fn();

    fireEvent.drag(<div on:drag={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnd` handler', () => {
    const spy = jest.fn();

    fireEvent.dragEnd(<div on:dragEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnter` handler', () => {
    const spy = jest.fn();

    fireEvent.dragEnter(<div on:dragEnter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragLeave` handler', () => {
    const spy = jest.fn();

    fireEvent.dragLeave(<div on:dragLeave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragOver` handler', () => {
    const spy = jest.fn();

    fireEvent.dragOver(<div on:dragOver={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragStart` handler', () => {
    const spy = jest.fn();

    fireEvent.dragStart(<div on:dragStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragExit` handler', () => {
    const spy = jest.fn();

    fireEvent.dragExit(<div on:dragExit={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drop` handler', () => {
    const spy = jest.fn();

    fireEvent.drop(<div on:drop={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
