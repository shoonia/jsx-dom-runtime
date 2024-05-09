import { jest } from '@jest/globals';
import { fireEvent, createEvent } from '@testing-library/dom';

const contentVisibilityAutoStateChange = (node: Node) =>
  fireEvent(node, createEvent('contentvisibilityautostatechange', node));

// @ts-expect-error https://developer.mozilla.org/en-US/docs/Web/API/ContentVisibilityAutoStateChangeEvent
export type NotImplementedYetInTS = ContentVisibilityAutoStateChangeEvent;

describe('ContentVisibilityAutoStateChangeEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform FormDataEvent events', async () => {
    await expect('<div on:contentVisibilityAutoStateChange={fn} />')
      .toBeTransform(i + '_jsx("div",{$:{contentvisibilityautostatechange:fn}});');
  });

  it('should add `formdata` function handler', () => {
    const spy: JSX.EventListener<HTMLDivElement> = jest.fn();

    contentVisibilityAutoStateChange(<div on:contentVisibilityAutoStateChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `formdata` object handler', () => {
    const handleEvent: JSX.EventListener<HTMLDivElement> = jest.fn();

    contentVisibilityAutoStateChange(<div on:contentVisibilityAutoStateChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
