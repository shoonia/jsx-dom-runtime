import { createRef, bindRef } from '../..';

describe('bindRef', () => {
  it('should bind two refs', () => {
    const ref1 = createRef();
    const ref2 = createRef();

    <div ref={bindRef(ref1, ref2)} />;

    expect(ref1.current).toBe(ref2.current);
  });

  it('should run two ref function', () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();

    const node = <div ref={bindRef(ref1, ref2)} />;

    expect(ref1).toHaveBeenCalledTimes(1);
    expect(ref1).toHaveBeenCalledWith(node);
    expect(ref2).toHaveBeenCalledTimes(1);
    expect(ref2).toHaveBeenCalledWith(node);
  });

  it('should work with mixed refs', () => {
    const ref = createRef();
    const cb = jest.fn();

    const node = <p ref={bindRef(ref, cb)} />;

    expect(ref.current).toBe(node);
    expect(cb).toHaveBeenCalledWith(node);
  });
});
