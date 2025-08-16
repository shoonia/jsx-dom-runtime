import { jest } from '@jest/globals';

import { jsxImport } from './utils';

describe('ref', () => {
  it('should work with function ref', () => {
    using ref = jest.fn();
    const div = <div ref={ref} />;

    expect(ref).toHaveBeenCalledTimes(1);
    expect(ref).toHaveBeenCalledWith(div);
  });

  it('should work with a list with function refs', () => {
    using ref1 = jest.fn();
    using ref2 = jest.fn();
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
    using ref2 = jest.fn();
    const div = <div ref={[ref1, ref2]} />;

    expect(ref1).toStrictEqual({ current: div });
    expect(ref2).toHaveBeenCalledTimes(1);
    expect(ref2).toHaveBeenCalledWith(div);
  });

  it('should support condition (&&) in the ref list', () => {
    using ref1 = jest.fn();
    using ref2 = jest.fn();
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

  it('should support multiple refs attributes', () => {
    using ref1 = jest.fn();
    using ref2 = jest.fn();
    using ref3 = jest.fn();
    const ref4 = {} as JSX.Ref<HTMLDivElement>;
    const ref5 = {} as JSX.Ref<HTMLDivElement>;

    // @ts-expect-error
    const div = <div ref={ref1} ref={[ref2]} ref={[ref3, ref4]} ref={ref5} />;

    expect(ref1).toHaveBeenCalledTimes(1);
    expect(ref2).toHaveBeenCalledTimes(1);
    expect(ref3).toHaveBeenCalledTimes(1);
    expect(ref4).toStrictEqual({ current: div });
    expect(ref5).toStrictEqual({ current: div });
  });

  it('should join all refs in one property', async () => {
    expect('<div ref={ref1} ref={[ref2]} ref={[ref3, ref4]} ref={ref5} />').toBeTransform(
      jsxImport`_jsx("div",{ref:[ref1,[ref2],[ref3,ref4],ref5]});`
    );
  });
});
