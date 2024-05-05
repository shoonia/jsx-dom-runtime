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

  it('should add `on:abort` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:abort={spy} />;

    fireEvent.abort(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlay` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:canPlay={spy} />;

    fireEvent.canPlay(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlayThrough` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:canPlayThrough={spy} />;

    fireEvent.canPlayThrough(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:durationChange` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:durationChange={spy} />;

    fireEvent.durationChange(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:emptied` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:emptied={spy} />;

    fireEvent.emptied(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:encrypted` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:encrypted={spy} />;

    fireEvent.encrypted(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:ended` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:ended={spy} />;

    fireEvent.ended(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedData` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:loadedData={spy} />;

    fireEvent.loadedData(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedMetadata` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:loadedMetadata={spy} />;

    fireEvent.loadedMetadata(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadStart` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:loadStart={spy} />;

    fireEvent.loadStart(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pause` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:pause={spy} />;

    fireEvent.pause(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:play` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:play={spy} />;

    fireEvent.play(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:playing` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:playing={spy} />;

    fireEvent.playing(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:progress` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:progress={spy} />;

    fireEvent.progress(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:rateChange` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:rateChange={spy} />;

    fireEvent.rateChange(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeked` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:seeked={spy} />;

    fireEvent.seeked(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeking` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:seeking={spy} />;

    fireEvent.seeking(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:stalled` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:stalled={spy} />;

    fireEvent.stalled(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:suspend` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:suspend={spy} />;

    fireEvent.suspend(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:timeUpdate` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:timeUpdate={spy} />;

    fireEvent.timeUpdate(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:volumeChange` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:volumeChange={spy} />;

    fireEvent.volumeChange(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:waiting` handler', () => {
    const spy = jest.fn();
    const audio = <audio on:waiting={spy} />;

    fireEvent.waiting(audio);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerDown` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerDown={spy} />;

    fireEvent.pointerDown(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerMove` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerMove={spy} />;

    fireEvent.pointerMove(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerUp` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerUp={spy} />;

    fireEvent.pointerUp(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerCancel` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerCancel={spy} />;

    fireEvent.pointerCancel(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerEnter` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerEnter={spy} />;

    fireEvent.pointerEnter(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerLeave` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerLeave={spy} />;

    fireEvent.pointerLeave(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOver` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerOver={spy} />;

    fireEvent.pointerOver(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pointerOut` handler', () => {
    const spy = jest.fn();
    const p = <p on:pointerOut={spy} />;

    fireEvent.pointerOut(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:gotPointerCapture` handler', () => {
    const spy = jest.fn();
    const p = <p on:gotPointerCapture={spy} />;

    fireEvent.gotPointerCapture(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:lostPointerCapture` handler', () => {
    const spy = jest.fn();
    const p = <p on:lostPointerCapture={spy} />;

    fireEvent.lostPointerCapture(p);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
