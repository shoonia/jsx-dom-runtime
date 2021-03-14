import { createRef, bindRef } from '../..';

describe('useText', () => {
  it('should add text', () => {
    const ref1 = createRef();
    const ref2 = createRef();

    <div ref={bindRef(ref1, ref2)} />;

    expect(ref1.current).toBe(ref2.current);
  });
});
