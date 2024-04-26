import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('Mouse Events', () => {
  it('should add `onclick` handler', () => {
    const spy = jest.fn();
    const div = <div onclick={spy} />;

    fireEvent.click(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should fire `click` event', () => {
    const spy = jest.fn();
    const div = <div onclick={spy} /> as HTMLDivElement;

    div.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oncontextmenu` handler', () => {
    const spy = jest.fn();
    const div = <div oncontextmenu={spy} />;

    fireEvent.contextMenu(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondblclick` handler', () => {
    const spy = jest.fn();
    const div = <div ondblclick={spy} />;

    fireEvent.doubleClick(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondrag` handler', () => {
    const spy = jest.fn();
    const div = <div ondrag={spy} />;

    fireEvent.drag(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragend` handler', () => {
    const spy = jest.fn();
    const div = <div ondragend={spy} />;

    fireEvent.dragEnd(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragenter` handler', () => {
    const spy = jest.fn();
    const div = <div ondragenter={spy} />;

    fireEvent.dragEnter(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragleave` handler', () => {
    const spy = jest.fn();
    const div = <div ondragleave={spy} />;

    fireEvent.dragLeave(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragover` handler', () => {
    const spy = jest.fn();
    const div = <div ondragover={spy} />;

    fireEvent.dragOver(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondragstart` handler', () => {
    const spy = jest.fn();
    const div = <div ondragstart={spy} />;

    fireEvent.dragStart(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `ondrop` handler', () => {
    const spy = jest.fn();
    const div = <div ondrop={spy} />;

    fireEvent.drop(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseenter` handler', () => {
    const spy = jest.fn();
    const div = <div onmouseenter={spy} />;

    fireEvent.mouseEnter(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseleave` handler', () => {
    const spy = jest.fn();
    const div = <div onmouseleave={spy} />;

    fireEvent.mouseLeave(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmousemove` handler', () => {
    const spy = jest.fn();
    const div = <div onmousemove={spy} />;

    fireEvent.mouseMove(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseout` handler', () => {
    const spy = jest.fn();
    const div = <div onmouseout={spy} />;

    fireEvent.mouseOut(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmouseover` handler', () => {
    const spy = jest.fn();
    const div = <div onmouseover={spy} />;

    fireEvent.mouseOver(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onmousedown` handler', () => {
    const spy = jest.fn();
    const div = <div onmousedown={spy} />;

    fireEvent.mouseDown(div);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
