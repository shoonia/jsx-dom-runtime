import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('on:events', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `on:click` handler', async () => {
    await expect('<button on:click={spy} />')
      .toBeTransform(i + '_jsx("button",{$:{click:spy}});');
  });

  it('should add two handlers', async () => {
    await expect('<button on:click={fn1} on:change={fn2} />')
      .toBeTransform(i + '_jsx("button",{$:{click:fn1,change:fn2}});');
  });

  it('should transform to lowercase event names', async () => {
    await expect('<input on:focusIn={fn1} on:focusOut={fn2} />')
      .toBeTransform(i + '_jsx("input",{$:{focusin:fn1,focusout:fn2}});');
  });

  it('should add `on:click` handler', () => {
    const spy = jest.fn();
    const btn = <button on:click={spy} />;

    fireEvent.click(btn);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dblclick` handler', () => {
    const spy = jest.fn();
    const btn = <button on:dblClick={spy} />;

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

  it('should add `on:focus` handler', () => {
    const spy = jest.fn();
    const input = <input on:focus={spy} />;

    fireEvent.focus(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusin` handler', () => {
    const spy = jest.fn();
    const input = <input on:focusIn={spy} />;

    fireEvent.focusIn(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusout` handler', () => {
    const spy = jest.fn();
    const input = <input on:focusOut={spy} />;

    fireEvent.focusOut(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:blur` handler', () => {
    const spy = jest.fn();
    const input = <input on:blur={spy} />;

    fireEvent.blur(input);
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

  it('should add `on:copy` handler', () => {
    const spy = jest.fn();
    const textarea = <textarea on:copy={spy} />;

    fireEvent.copy(textarea);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:cut` handler', () => {
    const spy = jest.fn();
    const textarea = <textarea on:cut={spy} />;

    fireEvent.cut(textarea);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:paste` handler', () => {
    const spy = jest.fn();
    const textarea = <textarea on:paste={spy} />;

    fireEvent.paste(textarea);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:input` handler', () => {
    const spy = jest.fn();
    const input = <input on:input={spy} />;

    fireEvent.input(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionStart` handler', () => {
    const spy = jest.fn();
    const div = <div on:transitionStart={spy} />;

    fireEvent.transitionStart(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionRun` handler', () => {
    const spy = jest.fn();
    const div = <div on:transitionRun={spy} />;

    fireEvent.transitionRun(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionEnd` handler', () => {
    const spy = jest.fn();
    const div = <div on:transitionEnd={spy} />;

    fireEvent.transitionEnd(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:transitionCancel` handler', () => {
    const spy = jest.fn();
    const div = <div on:transitionCancel={spy} />;

    fireEvent.transitionCancel(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationStart` handler', () => {
    const spy = jest.fn();
    const div = <div on:animationStart={spy} />;

    fireEvent.animationStart(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationEnd` handler', () => {
    const spy = jest.fn();
    const div = <div on:animationEnd={spy} />;

    fireEvent.animationEnd(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationIteration` handler', () => {
    const spy = jest.fn();
    const div = <div on:animationIteration={spy} />;

    fireEvent.animationIteration(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
