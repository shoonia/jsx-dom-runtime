import { createEvent, fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

const auxClick = (node: Node) => fireEvent(node, createEvent('auxclick', node));

describe('MouseEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `on:click` handler', async () => {
    await expect('<button on:click={spy} />')
      .toBeTransform(i + '_jsx("button",{$:{click:spy}});');
  });

  it('should add two handlers', async () => {
    await expect('<button on:click={fn1} on:change={fn2} />')
      .toBeTransform(i + '_jsx("button",{$:{click:fn1,change:fn2}});');
  });

  it('should add `onclick` handler', () => {
    const spy = jest.fn();

    fireEvent.click(<div onclick={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should fire `click` event', () => {
    const spy = jest.fn();

    <div
      ref={(div) => div.click()}
      onclick={spy}
    />;

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oncontextmenu` handler', () => {
    const spy = jest.fn();

    fireEvent.contextMenu(<div oncontextmenu={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondblclick` handler', () => {
    const spy = jest.fn();

    fireEvent.dblClick(<div ondblclick={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseenter` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseEnter(<div onmouseenter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseleave` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseLeave(<div onmouseleave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmousemove` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseMove(<div onmousemove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseout` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseOut(<div onmouseout={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseover` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseOver(<div onmouseover={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmousedown` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseDown(<div onmousedown={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:auxclick` handler', () => {
    const spy = jest.fn();

    auxClick(<div on:auxclick={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should fire `on:click` event', () => {
    const spy = jest.fn();

    <div
      ref={(div) => div.click()}
      on:click={spy}
    />;

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:contextMenu` handler', () => {
    const spy = jest.fn();

    fireEvent.contextMenu(<div on:contextMenu={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:dblClick` handler', () => {
    const spy = jest.fn();

    fireEvent.dblClick(<div on:dblClick={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseEnter` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseEnter(<div on:mouseEnter={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseLeave` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseLeave(<div on:mouseLeave={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseMove` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseMove(<div on:mouseMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseOut` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseOut(<div on:mouseOut={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseOver` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseOver(<div on:mouseOver={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:mouseDown` handler', () => {
    const spy = jest.fn();

    fireEvent.mouseDown(<div on:mouseDown={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
