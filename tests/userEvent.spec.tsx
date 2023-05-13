import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('User events', () => {
  it('should add `onclick` handler', () => {
    const spy = jest.fn();
    const btn = <button onclick={spy} />;

    fireEvent.click(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondblclick` handler', () => {
    const spy = jest.fn();
    const btn = <button ondblclick={spy} />;

    fireEvent.dblClick(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onchange` handler', () => {
    const spy = jest.fn();
    const input = <input onchange={spy} />;

    fireEvent.change(input, { target: { value: 'change event' } });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
  });

  it('should add `onsubmit` handler', () => {
    const spy = jest.fn();
    const form = <form onsubmit={spy} />;

    fireEvent.submit(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add a few handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();
    const input = <input onclick={spyClick} onchange={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add camel case naming handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();

    const input = <input
      // @ts-expect-error
      onClick={spyClick}
      onChange={spyChange}
    />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add property', () => {
    const spy = jest.fn();

    expect(<div onclick={spy} />).toHaveProperty('onclick', spy);
  });

  it('should NOT add unknown event property', () => {
    const spy = jest.fn();

    // @ts-expect-error
    expect(<div onunknown={spy} />).not.toHaveProperty('onunknown');
  });
});
