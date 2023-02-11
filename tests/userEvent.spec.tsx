import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('User events', () => {
  it('should add click handler', () => {
    const spyCallback = jest.fn();
    const btn = <button type="button" onClick={spyCallback}>click</button>;

    fireEvent.click(btn);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should add double click handler', () => {
    const spyCallback = jest.fn();
    const btn = <button type="button" onDBlClick={spyCallback}>click</button>;

    fireEvent.dblClick(btn);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should add change handler', () => {
    const spyCallback = jest.fn();
    const input = <input type="text" onChange={spyCallback} />;

    fireEvent.change(input, { target: { value: 'change event' } });

    expect(spyCallback).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
  });

  it('should add submit handler', () => {
    const spyCallback = jest.fn();
    const form = <form onSubmit={spyCallback} />;

    fireEvent.submit(form);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should add click handler when lower case', () => {
    const click = jest.fn();
    const change = jest.fn();

    const input = <input
      type="text"
      onclick={click}
      onchange={change}
    />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: '1' } });

    expect(click).toHaveBeenCalledTimes(1);
    expect(change).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('1');
  });
});
