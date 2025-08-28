/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('[Media] Event', () => {
  it('should add `on:abort` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.abort(<audio on:abort={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlay` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlay(<audio on:canPlay={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlayThrough` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlayThrough(<audio on:canPlayThrough={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:durationChange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.durationChange(<audio on:durationChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:emptied` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.emptied(<audio on:emptied={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:ended` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.ended(<audio on:ended={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedData` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedData(<audio on:loadedData={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedMetadata` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedMetadata(<audio on:loadedMetadata={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadStart` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadStart(<audio on:loadStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pause` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.pause(<audio on:pause={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:play` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.play(<audio on:play={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:playing` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.playing(<audio on:playing={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:progress` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.progress(<audio on:progress={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:rateChange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.rateChange(<audio on:rateChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeked` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeked(<audio on:seeked={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeking` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeking(<audio on:seeking={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:stalled` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.stalled(<audio on:stalled={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:suspend` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.suspend(<audio on:suspend={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:timeUpdate` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.timeUpdate(<audio on:timeUpdate={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:volumeChange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.volumeChange(<audio on:volumeChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:waiting` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.waiting(<audio on:waiting={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('[Media] DOM Property Event', () => {
  it('should add `onabort` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.abort(<audio onabort={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oncanplay` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlay(<audio oncanplay={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oncanplaythrough` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlayThrough(<audio oncanplaythrough={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondurationchange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.durationChange(<audio ondurationchange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onemptied` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.emptied(<audio onemptied={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onended` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.ended(<audio onended={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onloadeddata` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedData(<audio onloadeddata={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onloadedmetadata` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedMetadata(<audio onloadedmetadata={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onloadstart` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadStart(<audio onloadstart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onpause` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.pause(<audio onpause={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onplay` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.play(<audio onplay={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onplaying` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.playing(<audio onplaying={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onprogress` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.progress(<audio onprogress={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onratechange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.rateChange(<audio onratechange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onseeked` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeked(<audio onseeked={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onseeking` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeking(<audio onseeking={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onstalled` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.stalled(<audio onstalled={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onsuspend` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.suspend(<audio onsuspend={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ontimeupdate` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.timeUpdate(<audio ontimeupdate={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onvolumechange` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.volumeChange(<audio onvolumechange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onwaiting` handler', () => {
    const spy: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.waiting(<audio onwaiting={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('[Media] Event Object Listener', () => {
  it('should add `on:abort` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.abort(<audio on:abort={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlay` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlay(<audio on:canPlay={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:canPlayThrough` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.canPlayThrough(<audio on:canPlayThrough={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:durationChange` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.durationChange(<audio on:durationChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:emptied` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.emptied(<audio on:emptied={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:ended` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.ended(<audio on:ended={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedData` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedData(<audio on:loadedData={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadedMetadata` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadedMetadata(<audio on:loadedMetadata={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:loadStart` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.loadStart(<audio on:loadStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:pause` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.pause(<audio on:pause={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:play` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.play(<audio on:play={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:playing` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.playing(<audio on:playing={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:progress` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.progress(<audio on:progress={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:rateChange` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.rateChange(<audio on:rateChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeked` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeked(<audio on:seeked={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:seeking` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.seeking(<audio on:seeking={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:stalled` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.stalled(<audio on:stalled={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:suspend` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.suspend(<audio on:suspend={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:timeUpdate` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.timeUpdate(<audio on:timeUpdate={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:volumeChange` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.volumeChange(<audio on:volumeChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:waiting` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLAudioElement> = jest.fn();

    fireEvent.waiting(<audio on:waiting={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
