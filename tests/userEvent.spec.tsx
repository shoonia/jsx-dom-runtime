import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('User events', () => {
  it('should add click handler', () => {
    const spy = jest.fn();
    const btn = <button type="button" onClick={spy}>click</button>;

    fireEvent.click(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add double click handler', () => {
    const spy = jest.fn();
    const btn = <button type="button" onDBlClick={spy}>click</button>;

    fireEvent.dblClick(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add change handler', () => {
    const spy = jest.fn();
    const input = <input type="text" onChange={spy} />;

    fireEvent.change(input, { target: { value: 'change event' } });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
  });

  it('should add submit handler', () => {
    const spy = jest.fn();
    const form = <form onSubmit={spy} />;

    fireEvent.submit(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add lower case name handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();
    const input = <input type="text" onclick={spyClick} onchange={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });
});
