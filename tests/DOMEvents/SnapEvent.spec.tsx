/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

const scrollSnapChange = (node: Node) => fireEvent(node, createEvent('scrollsnapchange', node));
const scrollSnapChanging = (node: Node) => fireEvent(node, createEvent('scrollsnapchanging', node));

describe('SnapEvent', () => {
  // scrollsnapchange
  it('should add `on:scrollSnapChange` function listener', () => {
    const spy: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    scrollSnapChange(<div on:scrollSnapChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scrollSnapChange` object listener', () => {
    const handleEvent: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    scrollSnapChange(<div on:scrollSnapChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `onscrollsnapchange` function listener', () => {
    const spy: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    expect(<div onscrollsnapchange={spy} />).toHaveProperty('onscrollsnapchange', spy);
  });

  // scrollsnapchanging
   it('should add `on:scrollSnapChanging` function listener', () => {
    const spy: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    scrollSnapChanging(<div on:scrollSnapChanging={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scrollSnapChanging` object listener', () => {
    const handleEvent: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    scrollSnapChanging(<div on:scrollSnapChanging={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `onscrollsnapchanging` function listener', () => {
    const spy: JSX.SnapEventListener<HTMLDivElement> = jest.fn();

    expect(<div onscrollsnapchanging={spy} />).toHaveProperty('onscrollsnapchanging', spy);
  });
});
