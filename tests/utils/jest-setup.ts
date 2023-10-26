import '@testing-library/jest-dom';

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
        ? `expected "${val}" not to be equal outerHTML "${html}"`
        : `expected "${val}" to be equal outerHTML "${html}"`,
      pass,
    };
  },

  toHaveInnerHTML(node: HTMLElement, html: string) {
    const val = node.innerHTML;
    const pass = val === html;

    return {
      message: () => pass
        ? `expected "${val}" not to be equal innerHTML "${html}"`
        : `expected "${val}" to be equal innerHTML "${html}"`,
      pass,
    };
  },

  toHaveCssText(node: HTMLElement, css: string) {
    const val = node.style.cssText;
    const pass = val === css;

    return {
      message: () => pass
        ? `expected "${val}" not to be equal style.cssText "${css}"`
        : `expected "${val}" to be equal style.cssText "${css}"`,
      pass,
    };
  },
});
