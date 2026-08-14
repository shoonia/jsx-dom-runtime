import { signal } from 'jsx-dom-runtime';

import { signalishImport } from '../utils/t';

describe('signal prop:className', () => {
  it('should compile prop:className with signal to setProperty call', async () => {
    await expect('<div prop:className={s} />').toBeTransform(
      signalishImport`_jsx("div",{ref:e=>_setSignalish(s,i=>e.className=i)});`
    );
  });

  it('should join ref with prop:className signal expression', async () => {
    await expect('<div ref={(e) => console.log(e)} prop:className={s} />').toBeTransform(
      signalishImport`_jsx("div",{ref:[e=>_setSignalish(s,i=>e.className=i),e=>console.log(e)]});`
    );
  });

  it('should set initial className from signal', () => {
    const s = signal('foo');
    const div = <div prop:className={s} />;

    expect(div).toHaveClass('foo');
  });

  it('should update className when signal changes', () => {
    const s = signal('foo');
    const div = <div prop:className={s} />;

    expect(div).toHaveClass('foo');
    s.set('bar');
    expect(div).toHaveClass('bar');
  });

  it('should update multiple elements sharing the same signal', () => {
    const s = signal('shared');
    const div1 = <div prop:className={s} />;
    const div2 = <div prop:className={s} />;

    s.set('updated');

    expect(div1).toHaveClass('updated');
    expect(div2).toHaveClass('updated');
  });
});

describe('signal attr:class with multiple classes', () => {
  it('should compile `attr:class` with signal to setSignalish call', async () => {
    await expect('<div attr:class={s} />').toBeTransform(
      signalishImport`_jsx("div",{ref:e=>_setSignalish(s,i=>e.setAttribute("class",i))});`
    );
  });

  it('should join `ref` with `attr:class` signal expression', async () => {
    await expect('<div ref={(e) => console.log(e)} attr:class={s} />').toBeTransform(
      signalishImport`_jsx("div",{ref:[e=>_setSignalish(s,i=>e.setAttribute("class",i)),e=>console.log(e)]});`
    );
  });

  it('should set initial class attribute from signal', () => {
    const s = signal('foo');
    const div = <div attr:class={s} />;

    expect(div).toHaveAttribute('class', 'foo');
  });

  it('should update class attribute when signal changes', () => {
    const s = signal('foo');
    const div = <div attr:class={s} />;

    s.set('bar');

    expect(div).toHaveAttribute('class', 'bar');
  });

  it('should update multiple elements sharing the same signal', () => {
    const s = signal('shared');
    const div1 = <div attr:class={s} />;
    const div2 = <div attr:class={s} />;

    s.set('updated');

    expect(div1).toHaveAttribute('class', 'updated');
    expect(div2).toHaveAttribute('class', 'updated');
  });
});
