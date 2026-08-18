/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { vi } from 'vitest';
import { createEvent, fireEvent } from '@testing-library/dom';
import { jsxImport } from '../utils';

const fullscreenChange = (node: Node) => fireEvent(node, createEvent('fullscreenchange', node));
const fullscreenError = (node: Node) => fireEvent(node, createEvent('fullscreenerror', node));
const beforeMatch = (node: Node) => fireEvent(node, createEvent('beforematch', node));

describe('User events', () => {
  it('should add property', () => {
    const spy = vi.fn(() => null);

    expect(<div onclick={spy} />).toHaveProperty('onclick', spy);
  });

  it('should add a few handlers', () => {
    const spyClick = vi.fn(() => null);
    const spyChange = vi.fn(() => null);
    const input = <input onclick={spyClick} onchange={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should transform camel case naming handlers', () => {
    const spyClick = vi.fn(() => null);
    const spyChange = vi.fn(() => null);

    const input = <input
      // @ts-expect-error
      onClick={spyClick}
      onChange={spyChange}
    />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });
});

describe('Event: select', () => {
  it('should add `onselect` handler', () => {
    const spy: JSX.EventListener<HTMLInputElement> = vi.fn(() => null);

    fireEvent.select(<input onselect={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` function listener', () => {
    const spy: JSX.EventListener<HTMLInputElement> = vi.fn(() => null);

    fireEvent.select(<input on:select={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:select` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLInputElement> = vi.fn(() => null);

    fireEvent.select(<input on:select={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: load', () => {
  it('should add `onselect` handler', () => {
    const spy: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.load(<img onload={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` function listener', () => {
    const spy: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.load(<img on:load={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:load` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.load(<img on:load={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: error', () => {
  it('should add `onerror` handler', () => {
    const spy: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.error(<img onerror={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` function listener', () => {
    const spy: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.error(<img on:error={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:error` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLImageElement> = vi.fn(() => null);

    fireEvent.error(<img on:error={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: fullscreenchange', () => {
  it('should transform events name', async () => {
    await expect('<div on:fullscreenChange={fn} />')
      .toBeTransform(jsxImport`_jsx("div",{$:{fullscreenchange:fn}});`);
  });

  it('should add `on:fullscreenChange` function listener', () => {
    const spy: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    fullscreenChange(<div on:fullscreenChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:fullscreenChange` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    fullscreenChange(<div on:fullscreenChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: fullscreenerror', () => {
  it('should transform events name', async () => {
    await expect('<div on:fullscreenError={fn} />')
      .toBeTransform(jsxImport`_jsx("div",{$:{fullscreenerror:fn}});`);
  });

  it('should add `on:fullscreenError` function listener', () => {
    const spy: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    fullscreenError(<div on:fullscreenError={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:fullscreenError` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    fullscreenError(<div on:fullscreenError={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('Event: dblclick', () => {
  it('should transform React style name `ondoubleclick` to `ondblclick`', async () => {
    await expect('<div ondoubleclick={fn} />')
      .toBeTransform(jsxImport`_jsx("div",{ref:e=>e.ondblclick=fn});`);
  });

  it('should add ondblclick when `ondoubleclick` handler is present', () => {
    const spy: JSX.MouseEventListener = vi.fn(() => null);
    // @ts-expect-error
    fireEvent.dblClick(<div ondoubleclick={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('Event: beforematch', () => {
  it('should transform events name', async () => {
    await expect('<div on:beforeMatch={fn} />')
      .toBeTransform(jsxImport`_jsx("div",{$:{beforematch:fn}});`);
  });

  it('should add `on:beforeMatch` function listener', () => {
    const spy: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    beforeMatch(<div on:beforeMatch={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:beforeMatch` object listener', () => {
    const handleEvent: JSX.EventListener<HTMLDivElement> = vi.fn(() => null);

    beforeMatch(<div on:beforeMatch={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
