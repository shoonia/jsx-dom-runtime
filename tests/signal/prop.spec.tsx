import { signal } from 'jsx-dom-runtime';

const setPropertyImport = (s: TemplateStringsArray | string): string =>
  `import{setProperty as _setProperty,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${typeof s === 'string' ? s : s[0]}`;

describe('signal prop:className', () => {
  describe('compilation', () => {
    it('should compile prop:className with signal to setProperty call', async () => {
      await expect('<div prop:className={s} />').toBeTransform(
        setPropertyImport`_jsx("div",{ref:e=>_setProperty(s,i=>e.className=i)});`
      );
    });

    it('should join ref with prop:className signal expression', async () => {
      await expect('<div ref={(e) => console.log(e)} prop:className={s} />').toBeTransform(
        setPropertyImport`_jsx("div",{ref:[e=>_setProperty(s,i=>e.className=i),e=>console.log(e)]});`
      );
    });
  });

  describe('functionality', () => {
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

    it('should set empty className from signal with no initial value', () => {
      const s = signal();
      const div = <div prop:className={s} />;

      expect(div).toHaveClass('');
    });

    it('should update multiple elements sharing the same signal', () => {
      const s = signal('shared');
      const div1 = <div prop:className={s} />;
      const div2 = <div prop:className={s} />;

      s.set('updated');

      expect(div1).toHaveClass('updated');
      expect(div2).toHaveClass('updated');
    });

    it('should stop updating className after `off`', () => {
      const s = signal('initial');

      const div = <div prop:className={s} />;

      off();
      s.set('changed');

      expect(div).toHaveClass('initial');
    });
  });
});
