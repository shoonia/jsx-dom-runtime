import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('ClipboardEvent', () => {
  it('should add `on:copy` handler', () => {
    const spy: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.copy(<textarea on:copy={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:cut` handler', () => {
    const spy: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.cut(<textarea on:cut={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:paste` handler', () => {
    const spy: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.paste(<textarea on:paste={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('ClipboardEvent Object Listener', () => {
  it('should add `on:copy` object listener', () => {
    const handleEvent: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.copy(<textarea on:copy={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:cut` object listener', () => {
    const handleEvent: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.cut(<textarea on:cut={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:paste` object listener', () => {
    const handleEvent: JSX.ClipboardEventListener<HTMLTextAreaElement> = jest.fn();

    fireEvent.paste(<textarea on:paste={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
