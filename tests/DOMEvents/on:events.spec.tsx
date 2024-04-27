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

  it('should add `on:reset` handler', () => {
    const spy = jest.fn();
    const form = <form on:reset={spy} />;

    fireEvent.reset(form);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:invalid` handler', () => {
    const spy = jest.fn();
    const form = <form on:invalid={spy} />;

    fireEvent.invalid(form);
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

  it('should fire `click` event', () => {
    const spy = jest.fn();
    const div = <div on:click={spy} /> as HTMLDivElement;

    div.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:contextMenu` handler', () => {
    const spy = jest.fn();
    const div = <div on:contextMenu={spy} />;

    fireEvent.contextMenu(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dblClick` handler', () => {
    const spy = jest.fn();
    const div = <div on:dblClick={spy} />;

    fireEvent.doubleClick(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drag` handler', () => {
    const spy = jest.fn();
    const div = <div on:drag={spy} />;

    fireEvent.drag(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnd` handler', () => {
    const spy = jest.fn();
    const div = <div on:dragEnd={spy} />;

    fireEvent.dragEnd(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragEnter` handler', () => {
    const spy = jest.fn();
    const div = <div on:dragEnter={spy} />;

    fireEvent.dragEnter(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragLeave` handler', () => {
    const spy = jest.fn();
    const div = <div on:dragLeave={spy} />;

    fireEvent.dragLeave(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragOver` handler', () => {
    const spy = jest.fn();
    const div = <div on:dragOver={spy} />;

    fireEvent.dragOver(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dragStart` handler', () => {
    const spy = jest.fn();
    const div = <div on:dragStart={spy} />;

    fireEvent.dragStart(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:drop` handler', () => {
    const spy = jest.fn();
    const div = <div on:drop={spy} />;

    fireEvent.drop(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseEnter` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseEnter={spy} />;

    fireEvent.mouseEnter(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseLeave` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseLeave={spy} />;

    fireEvent.mouseLeave(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseMove` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseMove={spy} />;

    fireEvent.mouseMove(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseOut` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseOut={spy} />;

    fireEvent.mouseOut(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseOver` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseOver={spy} />;

    fireEvent.mouseOver(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseDown` handler', () => {
    const spy = jest.fn();
    const div = <div on:mouseDown={spy} />;

    fireEvent.mouseDown(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyDown` handler', () => {
    const spy = jest.fn();
    const input = <input on:keyDown={spy} />;

    fireEvent.keyDown(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyUp` handler', () => {
    const spy = jest.fn();
    const input = <input on:keyUp={spy} />;

    fireEvent.keyUp(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:keyPress` handler', () => {
    const spy = jest.fn();
    const input = <input on:keyPress={spy} />;

    fireEvent.keyPress(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:scroll` handler', () => {
    const spy = jest.fn();
    const main = <main on:scroll={spy} />;

    fireEvent.scroll(main);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionStart` handler', () => {
    const spy = jest.fn();
    const input = <input on:compositionStart={spy} />;

    fireEvent.compositionStart(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionEnd` handler', () => {
    const spy = jest.fn();
    const input = <input on:compositionEnd={spy} />;

    fireEvent.compositionEnd(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:compositionUpdate` handler', () => {
    const spy = jest.fn();
    const input = <input on:compositionUpdate={spy} />;

    fireEvent.compositionUpdate(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchStart` handler', () => {
    const spy = jest.fn();
    const div = <div on:touchStart={spy} />;

    fireEvent.touchStart(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchEnd` handler', () => {
    const spy = jest.fn();
    const div = <div on:touchEnd={spy} />;

    fireEvent.touchEnd(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchCancel` handler', () => {
    const spy = jest.fn();
    const div = <div on:touchCancel={spy} />;

    fireEvent.touchCancel(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:touchMove` handler', () => {
    const spy = jest.fn();
    const div = <div on:touchMove={spy} />;

    fireEvent.touchMove(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
