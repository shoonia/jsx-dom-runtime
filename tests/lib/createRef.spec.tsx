import { jest } from '@jest/globals';

import { createRef } from '../..';

describe('ref', () => {
  it('should run callback ref when it is a function', () => {
    const spy = jest.fn();

    const node = <footer ref={spy} />;

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(node);
  });

  it('should set up ref.current when it is an object', () => {
    const ref = createRef();

    const node = <td ref={ref} />;

    expect(node).toBe(ref.current);
  });
});
