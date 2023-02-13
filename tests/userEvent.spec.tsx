import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('User events', () => {
  it('should add click handler', () => {
    const spy = jest.fn();
    const btn = <button type="button" onclick={spy}>click</button>;

    fireEvent.click(btn as any);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add double click handler', () => {
    const spy = jest.fn();
    const btn = <button type="button" ondblclick={spy}>click</button>;

    fireEvent.dblClick(btn as any);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add change handler', () => {
    const spy = jest.fn();
    const input = <input type="text" onchange={spy} />;

    fireEvent.change(input as any, { target: { value: 'change event' } });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
  });

  it('should add submit handler', () => {
    const spy = jest.fn();
    const form = <form onsubmit={spy} />;

    fireEvent.submit(form as any);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add a few handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();
    const input = <input type="text" onclick={spyClick} onchange={spyChange} />;

    fireEvent.click(input as any);
    fireEvent.change(input as any, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add camel case naming handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();

    const input = <input
      type="text"
      // @ts-expect-error
      onClick={spyClick}
      onChange={spyChange}
    />;

    fireEvent.click(input as any);
    fireEvent.change(input as any, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });
});
