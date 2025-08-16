import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

const animationCancel = (node: Node) => fireEvent(node, createEvent('animationcancel', node));

describe('AnimationEvent', () => {
  it('should add `on:animationStart` handler', () => {
    using spy: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationStart(<p on:animationStart={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationEnd` handler', () => {
    using spy: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationEnd(<p on:animationEnd={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationIteration` handler', () => {
    using spy: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationIteration(<p on:animationIteration={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationCancel` handler', () => {
    using spy: JSX.AnimationEventListener = jest.fn();

    animationCancel(<p on:animationCancel={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('AnimationEvent Object Listener', () => {
  it('should add `on:animationStart` object listener', () => {
    using handleEvent: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationStart(<p on:animationStart={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationEnd` object listener', () => {
    using handleEvent: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationEnd(<p on:animationEnd={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationIteration` object listener', () => {
    using handleEvent: JSX.AnimationEventListener = jest.fn();

    fireEvent.animationIteration(<p on:animationIteration={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:animationCancel` object listener', () => {
    using handleEvent: JSX.AnimationEventListener = jest.fn();

    animationCancel(<p on:animationCancel={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
