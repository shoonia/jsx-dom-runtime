import { jest } from '@jest/globals';
import { createEvent, fireEvent } from '@testing-library/dom';

import { svgImport } from '../utils/t';

const beginEvent = (node: Node) => fireEvent(node, createEvent('beginEvent', node));
const endEvent = (node: Node) => fireEvent(node, createEvent('endEvent', node));
const repeatEvent = (node: Node) => fireEvent(node, createEvent('repeatEvent', node));

describe('SVGAnimationElement', () => {
  it('should add `beginEvent` function handler', () => {
    const spy: JSX.EventListener<SVGAnimateElement> = jest.fn();

    beginEvent(<animate on:beginEvent={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `endEvent` function handler', () => {
    const spy: JSX.EventListener<SVGAnimateElement> = jest.fn();

    endEvent(<animateMotion on:endEvent={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `repeatEvent` function handler', () => {
    const spy: JSX.EventListener<SVGAnimateElement> = jest.fn();

    repeatEvent(<animateTransform on:repeatEvent={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should transform `on:beginEvent`, `on:endEvent` and `on:repeatEvent` props to event listeners', async () => {
    await expect(
      '<animate on:beginEvent={begin} on:endEvent={end} on:repeatEvent={repeat} />'
    ).toBeTransform(
      svgImport`_jsx("animate",{$:{beginEvent:begin,endEvent:end,repeatEvent:repeat},_:_svgNs});`
    );
  });
});
