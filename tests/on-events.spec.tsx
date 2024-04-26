import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('on:events', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `on:click` handler', async () => {
    await expect('<button on:click={spy} />')
      .toBeTransform(i + '_jsx("button",{on:{click:spy}});');
  });

  it('should add two handlers', async () => {
    await expect('<button on:click={fn1} on:change={fn2} />')
      .toBeTransform(i + '_jsx("button",{on:{click:fn1,change:fn2}});');
  });

  it('should add `on:click` handler', () => {
    const spy = jest.fn();
    const btn = <button on:click={spy} />;

    fireEvent.click(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dblclick` handler', () => {
    const spy = jest.fn();
    const btn = <button on:dblclick={spy} />;

    fireEvent.dblClick(btn);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:change` handler', () => {
    const spy = jest.fn();
    const input = <input on:change={spy} />;

    fireEvent.change(input, { target: { value: 'change event' } });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
  });

  it('should add `on:submit` handler', () => {
    const spy = jest.fn();
    const form = <form on:submit={spy} />;

    fireEvent.submit(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add a few handlers', () => {
    const spyClick = jest.fn();
    const spyChange = jest.fn();
    const input = <input on:click={spyClick} on:change={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });
});
