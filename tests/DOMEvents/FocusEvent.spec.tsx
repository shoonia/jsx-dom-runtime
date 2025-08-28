/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('FocusEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform to lowercase event names', async () => {
    await expect('<input on:focusIn={fn1} on:focusOut={fn2} />')
      .toBeTransform(i + '_jsx("input",{$:{focusin:fn1,focusout:fn2}});');
  });

  it('should transform FocusEvent events', async () => {
    await expect(`
      <input
        type="tel"
        on:focus={fn1}
        on:blur={fn2}
        on:focusIn={fn3}
        on:focusOut={fn4}
      />
    `).toBeTransform(i + '_jsx("input",{type:"tel",$:{focus:fn1,blur:fn2,focusin:fn3,focusout:fn4}});');
  });

  it('should add `onfocus` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focus(<input onfocus={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onblur` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.blur(<input onblur={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `focusin` handler', () => {
    const spy = jest.fn();
    const input = <input ref={(node) => {
      node.addEventListener('focusin', spy);
    }} />;

    fireEvent.focusIn(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `focusout` handler', () => {
    const spy = jest.fn();
    const input = <input ref={(node) => {
      node.addEventListener('focusout', spy);
    }} />;

    fireEvent.focusOut(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focus` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focus(<input on:focus={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusIn` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focusIn(<input on:focusIn={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusOut` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focusOut(<input on:focusOut={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:blur` handler', () => {
    const spy: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.blur(<input on:blur={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('FocusEvent Object Listener', () => {
  it('should add `on:focus` object lisnener', () => {
    const handleEvent: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focus(<input on:focus={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusIn` object lisnener', () => {
    const handleEvent: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focusIn(<input on:focusIn={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:focusOut` object lisnener', () => {
    const handleEvent: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.focusOut(<input on:focusOut={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:blur` object lisnener', () => {
    const handleEvent: JSX.FocusEventListener<HTMLInputElement> = jest.fn();

    fireEvent.blur(<input on:blur={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
