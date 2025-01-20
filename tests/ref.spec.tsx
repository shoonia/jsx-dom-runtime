import { jest } from '@jest/globals';

describe('ref', () => {
  it('should work with function ref', () => {
    const ref = jest.fn();
    const div = <div ref={ref} />;

    expect(ref).toHaveBeenCalledTimes(1);
    expect(ref).toHaveBeenCalledWith(div);
  });

  it('should work with a list with function refs', () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();
    const div = <div ref={[ref1, ref2]} />;

    expect(ref1).toHaveBeenCalledTimes(1);
    expect(ref1).toHaveBeenCalledWith(div);
    expect(ref2).toHaveBeenCalledTimes(1);
    expect(ref2).toHaveBeenCalledWith(div);
  });

  it('should work with object ref', () => {
    const ref = {} as JSX.Ref<HTMLDivElement>;
    const div = <div ref={ref} />;

    expect(ref).toStrictEqual({ current: div });
  });

  it('should work with a list object refs', () => {
    const ref1 = {} as JSX.Ref<HTMLDivElement>;
    const ref2 = {} as JSX.Ref<HTMLDivElement>;
    const div = <div ref={[ref1, ref2]} />;

    expect(ref1).toStrictEqual({ current: div });
    expect(ref2).toStrictEqual({ current: div });
  });

  it('should work with multiply refs', () => {
    const ref1 = {} as JSX.Ref<HTMLDivElement>;
    const ref2 = jest.fn();
    const div = <div ref={[ref1, ref2]} />;

    expect(ref1).toStrictEqual({ current: div });
    expect(ref2).toHaveBeenCalledTimes(1);
    expect(ref2).toHaveBeenCalledWith(div);
  });

  it('should support condition (&&) in the ref list', () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();
    const T = true;
    const F = false;

    const div = <div ref={[ T && ref1, F && ref2]} />;

    expect(ref1).toHaveBeenCalledTimes(1);
    expect(ref1).toHaveBeenCalledWith(div);
    expect(ref2).toHaveBeenCalledTimes(0);
  });

  it('should work with null & undefined in the list', () => {
    expect.hasAssertions();

    <div ref={null} />;
    <div ref={undefined} />;
    <div ref={undefined} />;
    <div ref={[]} />;
    <div ref={[null, undefined, false]} />;

    expect(true).toBeTruthy();
  });
});
