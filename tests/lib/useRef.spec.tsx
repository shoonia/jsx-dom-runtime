import { jest } from '@jest/globals';

import { useRef } from 'jsx-dom-runtime';

describe('ref', () => {
  it('should run callback ref when it is a function', () => {
    const spy: JSX.Ref<HTMLElement> = jest.fn();

    const node = <footer ref={spy} />;

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(node);
  });

  it('should set up ref.current when it is an object', () => {
    const ref = useRef<HTMLTableCellElement>();

    const node = <td ref={ref} />;

    expect(ref.current).toBe(node);
  });
});
