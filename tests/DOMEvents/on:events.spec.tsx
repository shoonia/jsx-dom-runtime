import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('on:events', () => {
  it('should add `on:change` handler', () => {
    const spy = jest.fn();
    const input = <input on:change={spy} />;

    fireEvent.change(input, { target: { value: 'change event' } });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('change event');
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
