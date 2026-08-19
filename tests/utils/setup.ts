// import '@testing-library/jest-dom/vitest';
import { t } from './t';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

expect.extend({
  toHaveOuterHTML(node: HTMLElement, html: string) {
    const val = node.outerHTML;
    const pass = val === html;

    return {
      pass,
      message: () => pass
        ? 'expected value not to be equal outerHTML'
        : 'expected value to be equal outerHTML\n\n' + this.utils.diff(val, html),
    };
  },

  toHaveInnerHTML(node: HTMLElement, html: string) {
    const val = node.innerHTML;
    const pass = val === html;

    return {
      pass,
      message: () => pass
        ? 'expected value not to be equal innerHTML'
        : 'expected value to be equal innerHTML\n\n' + this.utils.diff(val, html),
    };
  },

  async toBeTransform(source: string, code: string) {
    const result = await t(source, this.testPath ?? 'test.tsx', true);

    const pass = code === result;

    return {
      pass,
      message: () => pass
        ? 'expected code not to be equal result'
        : 'expected code to be equal result\n\n' + this.utils.diff(code, result),
    };
  }
});
