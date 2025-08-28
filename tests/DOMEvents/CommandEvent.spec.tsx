/* eslint-disable jsx-dom-runtime/no-legacy-event-handler */
import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

const command = (node: Node) => fireEvent(node, createEvent('command', node));

describe('CommandEvent', () => {
  it('should add `on:command` function listener', () => {
    const spy: JSX.CommandEventListener<HTMLDivElement> = jest.fn();

    command(<div on:command={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:command` object listener', () => {
    const handleEvent: JSX.CommandEventListener<HTMLDivElement> = jest.fn();

    command(<div on:command={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `oncommand` function listener', () => {
    const spy: JSX.CommandEventListener<HTMLDivElement> = jest.fn();

    expect(<div oncommand={spy} />).toHaveProperty('oncommand', spy);
  });
});
