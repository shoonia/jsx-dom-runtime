import { jest } from '@jest/globals';

import { signal } from 'jsx-dom-runtime';

describe('signal.subscribe', () => {
  it('should call subscriber immediately with current value', () => {
    const s = signal('hello');
    const fn = jest.fn();

    s.subscribe(fn);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('hello');
  });

  it('should call subscriber with default empty string when no initial value', () => {
    const s = signal();
    const fn = jest.fn();

    s.subscribe(fn);

    expect(fn).toHaveBeenCalledWith('');
  });

  it('should call subscriber when value changes', () => {
    const s = signal('a');
    const fn = jest.fn();

    s.subscribe(fn);
    fn.mockClear();

    s.set('b');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('b');
  });

  it('should call subscriber on every set', () => {
    const s = signal('x');
    const fn = jest.fn();

    s.subscribe(fn);
    fn.mockClear();

    s.set('y');
    s.set('z');

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'y');
    expect(fn).toHaveBeenNthCalledWith(2, 'z');
  });

  it('should support multiple subscribers', () => {
    const s = signal('init');
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    s.subscribe(fn1);
    s.subscribe(fn2);
    fn1.mockClear();
    fn2.mockClear();

    s.set('updated');

    expect(fn1).toHaveBeenCalledWith('updated');
    expect(fn2).toHaveBeenCalledWith('updated');
  });

  it('should stop calling subscriber after unsubscribe', () => {
    const s = signal('a');
    const fn = jest.fn();

    const unsubscribe = s.subscribe(fn);
    fn.mockClear();

    unsubscribe();
    s.set('b');

    expect(fn).not.toHaveBeenCalled();
  });

  it('should unsubscribe only the specific subscriber', () => {
    const s = signal('a');
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    const unsubscribe = s.subscribe(fn1);
    s.subscribe(fn2);
    fn1.mockClear();
    fn2.mockClear();

    unsubscribe();
    s.set('b');

    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).toHaveBeenCalledWith('b');
  });

  it('should return true from unsubscribe when subscriber was active', () => {
    const s = signal('a');
    const fn = jest.fn();

    const unsubscribe = s.subscribe(fn);

    expect(unsubscribe()).toBe(true);
  });

  it('should return false from unsubscribe when subscriber was already removed', () => {
    const s = signal('a');
    const fn = jest.fn();

    const unsubscribe = s.subscribe(fn);
    unsubscribe();

    expect(unsubscribe()).toBe(false);
  });
});
