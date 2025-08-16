import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

const fullscreenChange = (node: Node) => fireEvent(node, createEvent('fullscreenchange', node));
const fullscreenError = (node: Node) => fireEvent(node, createEvent('fullscreenerror', node));

describe('Event: select', () => {
  it('should add `onselect` handler', () => {
    using spy: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input onselect={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` function listener', () => {
    using spy: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input on:select={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` object listener', () => {
    using handleEvent: JSX.EventListener<HTMLInputElement> = jest.fn();

    fireEvent.select(<input on:select={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: load', () => {
  it('should add `onselect` handler', () => {
    using spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img onload={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` function listener', () => {
    using spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img on:load={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` object listener', () => {
    using handleEvent: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.load(<img on:load={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: error', () => {
  it('should add `onerror` handler', () => {
    using spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img onerror={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` function listener', () => {
    using spy: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img on:error={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` object listener', () => {
    using handleEvent: JSX.EventListener<HTMLImageElement> = jest.fn();

    fireEvent.error(<img on:error={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: fullscreenchange', () => {
  it('should transform events name', async () => {
    await expect('<div on:fullscreenChange={fn} />')
      .toBeTransform(i + '_jsx("div",{$:{fullscreenchange:fn}});');
  });

  it('should add `on:fullscreenChange` function listener', () => {
    using spy: JSX.EventListener<HTMLDivElement> = jest.fn();

    fullscreenChange(<div on:fullscreenChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:fullscreenChange` object listener', () => {
    using handleEvent: JSX.EventListener<HTMLDivElement> = jest.fn();

    fullscreenChange(<div on:fullscreenChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: fullscreenerror', () => {
  it('should transform events name', async () => {
    await expect('<div on:fullscreenError={fn} />')
      .toBeTransform(i + '_jsx("div",{$:{fullscreenerror:fn}});');
  });

  it('should add `on:fullscreenError` function listener', () => {
    using spy: JSX.EventListener<HTMLDivElement> = jest.fn();

    fullscreenError(<div on:fullscreenError={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:fullscreenError` object listener', () => {
    using handleEvent: JSX.EventListener<HTMLDivElement> = jest.fn();

    fullscreenError(<div on:fullscreenError={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
