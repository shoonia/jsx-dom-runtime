import { createRef } from '../..';

describe('ref', () => {
  it('should run ref when it is function', () => {
    const spy = jest.fn();

    const node = <footer ref={spy} />;

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(node);
  });

  it('should set up ref.current when it is object', () => {
    const ref = createRef();

    const node = <td ref={ref} />;

    expect(node).toBe(ref.current);
  });
});
