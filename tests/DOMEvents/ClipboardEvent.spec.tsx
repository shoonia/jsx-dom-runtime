import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('ClipboardEvent', () => {
  it('should add `on:copy` handler', () => {
    const spy = jest.fn();

    fireEvent.copy(<textarea on:copy={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:cut` handler', () => {
    const spy = jest.fn();

    fireEvent.cut(<textarea on:cut={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:paste` handler', () => {
    const spy = jest.fn();

    fireEvent.paste(<textarea on:paste={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
