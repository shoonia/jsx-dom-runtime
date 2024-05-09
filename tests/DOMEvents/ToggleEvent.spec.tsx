import { createEvent, fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

const toggle = (node: Node) => fireEvent(node, createEvent('toggle', node));
const beforeToggle = (node: Node) => fireEvent(node, createEvent('beforetoggle', node));

describe('ToggleEvent: toggle', () => {
  it('should add `on:toggle` function handler', () => {
    const spy: JSX.ToggleEventListener<HTMLDetailsElement> = jest.fn();

    toggle(<details on:toggle={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:toggle` object listener', () => {
    const handleEvent: JSX.ToggleEventListener<HTMLDetailsElement> = jest.fn();

    toggle(<details on:toggle={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});

describe('ToggleEvent: beforetoggle', () => {
  it('should transform events name', async () => {
    await expect('<div on:beforeToggle={fn} />')
      .toBeTransform(i + '_jsx("div",{$:{beforetoggle:fn}});');
  });

  it('should add `on:beforeToggle` function handler', () => {
    const spy: JSX.ToggleEventListener<HTMLDivElement> = jest.fn();

    beforeToggle(<div on:beforeToggle={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:beforeToggle` object listener', () => {
    const handleEvent: JSX.ToggleEventListener<HTMLDivElement> = jest.fn();

    beforeToggle(<div on:beforeToggle={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
