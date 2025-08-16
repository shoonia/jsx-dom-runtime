import { jest } from '@jest/globals';
import { fireEvent, createEvent } from '@testing-library/dom';

const contentVisibilityAutoStateChange = (node: Node) =>
  fireEvent(node, createEvent('contentvisibilityautostatechange', node));

describe('ContentVisibilityAutoStateChangeEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform events name', async () => {
    await expect('<div on:contentVisibilityAutoStateChange={fn} />')
      .toBeTransform(i + '_jsx("div",{$:{contentvisibilityautostatechange:fn}});');
  });

  it('should add `formdata` function handler', () => {
    using spy: JSX.ContentVisibilityAutoStateChangeEventListener<HTMLDivElement> = jest.fn();

    contentVisibilityAutoStateChange(<div on:contentVisibilityAutoStateChange={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `formdata` object handler', () => {
    using handleEvent: JSX.ContentVisibilityAutoStateChangeEventListener<HTMLDivElement> = jest.fn();

    contentVisibilityAutoStateChange(<div on:contentVisibilityAutoStateChange={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
