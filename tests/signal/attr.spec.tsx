import { signal } from 'jsx-dom-runtime';

describe('signal', () => {
  it('should set initial attribute value', () => {
    const s = signal('hello');
    const div = <div class={s} />;

    expect(div).toHaveAttribute('class', 'hello');
  });

  it('should update attribute when signal changes', () => {
    const s = signal('hello');
    const div = <div class={s} />;

    s.set('new');

    expect(div).toHaveAttribute('class', 'new');
  });

  it('should not update attribute when value is the same', () => {
    const s = signal('hello');
    const div = <div class={s} />;

    s.set('hello');

    expect(div).toHaveAttribute('class', 'hello');
  });

  it('should update multiple elements sharing the same signal', () => {
    const s = signal('hello');
    const div1 = <div class={s} />;
    const div2 = <div class={s} />;

    expect(div1).toHaveAttribute('class', 'hello');
    expect(div2).toHaveAttribute('class', 'hello');

    s.set('world');

    expect(div1).toHaveAttribute('class', 'world');
    expect(div2).toHaveAttribute('class', 'world');
  });

  it('should expose current value via .value', () => {
    const s = signal('hello');

    expect(s.value).toBe('hello');

    s.set('world');

    expect(s.value).toBe('world');
  });

  it('should default to empty string when no initial value provided', () => {
    const s = signal();
    const div = <div class={s} />;

    expect(div).toHaveAttribute('class', '');
  });
});
