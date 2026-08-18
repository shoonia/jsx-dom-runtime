import { vi } from 'vitest';

import { signal } from 'jsx-dom-runtime';

describe('signal.on', () => {
  it('should call `on` immediately with current value', () => {
    const s = signal('hello');
    const fn = vi.fn(() => {});

    s.on(fn);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('hello');
  });

  it('should call `on` with default empty string when no initial value', () => {
    const s = signal();
    const fn = vi.fn(() => {});

    s.on(fn);

    expect(fn).toHaveBeenCalledWith('');
  });

  it('should call `on` when value changes', () => {
    const s = signal('a');
    const fn = vi.fn(() => {});

    s.on(fn);
    fn.mockClear();

    s.set('b');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('b');
  });

  it('should call `on` on every set', () => {
    const s = signal('x');
    const fn = vi.fn(() => {});

    s.on(fn);
    fn.mockClear();

    s.set('y');
    s.set('z');

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'y');
    expect(fn).toHaveBeenNthCalledWith(2, 'z');
  });

  it('should support multiple listeners', () => {
    const s = signal('init');
    const fn1 = vi.fn(() => {});
    const fn2 = vi.fn(() => {});

    s.on(fn1);
    s.on(fn2);
    fn1.mockClear();
    fn2.mockClear();

    s.set('updated');

    expect(fn1).toHaveBeenCalledWith('updated');
    expect(fn2).toHaveBeenCalledWith('updated');
  });

  it('should stop calling `on` after `off`', () => {
    const s = signal('a');
    const fn = vi.fn(() => {});

    const off = s.on(fn);
    fn.mockClear();

    off();
    s.set('b');

    expect(fn).not.toHaveBeenCalled();
  });

  it('should `off` only the specific `on`', () => {
    const s = signal('a');
    const fn1 = vi.fn(() => {});
    const fn2 = vi.fn(() => {});

    const off = s.on(fn1);
    s.on(fn2);
    fn1.mockClear();
    fn2.mockClear();

    off();
    s.set('b');

    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).toHaveBeenCalledWith('b');
  });

  it('should return true from `off` when `on` was active', () => {
    const s = signal('a');
    const fn = vi.fn(() => {});

    const off = s.on(fn);

    expect(off()).toBe(true);
  });

  it('should return false from `off` when `on` was already removed', () => {
    const s = signal('a');
    const fn = vi.fn(() => {});

    const off = s.on(fn);
    off();

    expect(off()).toBe(false);
  });
});
