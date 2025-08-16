import { createEvent, fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

const scrollEnd = (node: Node) => fireEvent(node, createEvent('scrollend', node));

describe('UIEvent', () => {
  it('should add `onscroll` handler', () => {
    using spy: JSX.UIEventListener<HTMLElement> = jest.fn();

    fireEvent.scroll(<main onscroll={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scroll` handler', () => {
    using spy: JSX.UIEventListener<HTMLElement> = jest.fn();

    fireEvent.scroll(<main on:scroll={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scrollEnd` handler', () => {
    using spy: JSX.UIEventListener<HTMLElement> = jest.fn();

    scrollEnd(<main on:scrollEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('UIEvent Object Listener', () => {
  it('should add `on:scroll` object listener', () => {
    using handleEvent: JSX.UIEventListener<HTMLElement> = jest.fn();

    fireEvent.scroll(<main on:scroll={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scrollEnd` object listener', () => {
    using handleEvent: JSX.UIEventListener<HTMLElement> = jest.fn();

    scrollEnd(<main on:scrollEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
