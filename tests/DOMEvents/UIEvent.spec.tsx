import { createEvent, fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

const scrollEnd = (node: Node) => fireEvent(node, createEvent('scrollend', node));

describe('UIEvent', () => {
  it('should add `onscroll` handler', () => {
    const spy = jest.fn();

    fireEvent.scroll(<main onscroll={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scroll` handler', () => {
    const spy = jest.fn();

    fireEvent.scroll(<main on:scroll={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scrollEnd` handler', () => {
    const spy = jest.fn();

    scrollEnd(<main on:scrollEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
