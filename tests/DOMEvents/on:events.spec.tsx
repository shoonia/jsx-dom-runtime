import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('on:events', () => {
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
});
