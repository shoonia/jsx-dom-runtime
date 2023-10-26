import '@testing-library/jest-dom';
import { diffStringsUnified } from 'jest-diff';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

expect.extend({
  toHaveOuterHTML(node: HTMLElement, html: string) {
    const val = node.outerHTML;
    const pass = val === html;

    return {
      message: () => pass
        ? 'expected value not to be equal outerHTML'
        : 'expected value to be equal outerHTML\n\n' + diffStringsUnified(val, html),
      pass,
    };
  },

  toHaveInnerHTML(node: HTMLElement, html: string) {
    const val = node.innerHTML;
    const pass = val === html;

    return {
      message: () => pass
        ? 'expected value not to be equal innerHTML'
        : 'expected value to be equal innerHTML\n\n' + diffStringsUnified(val, html),
      pass,
    };
  },

  toHaveCssText(node: HTMLElement, css: string) {
    const val = node.style.cssText;
    const pass = val === css;

    return {
      message: () => pass
        ? `expected "${val}" not to be equal style.cssText "${css}"`
        : 'expected "${val}" to be equal style.cssText "${css}"\n\n' + diffStringsUnified(val, css),
      pass,
    };
  },
});
