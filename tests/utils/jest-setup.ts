import '@testing-library/jest-dom';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

expect.extend({
  toHaveOuterHTML(node: HTMLElement, html: string) {
    const val = node.outerHTML;

    if (val === html) {
      return {
        message: () => `expected "${val}" not to be equal outerHTML "${html}"`,
        pass: true,
      };
    }

    return {
      message: () => `expected "${val}" to be equal outerHTML "${html}"`,
      pass: false,
    };
  },

  toHaveInnerHTML(node: HTMLElement, html: string) {
    const val = node.innerHTML;

    if (val === html) {
      return {
        message: () => `expected "${val}" not to be equal innerHTML "${html}"`,
        pass: true,
      };
    }

    return {
      message: () => `expected "${val}" to be equal innerHTML "${html}"`,
      pass: false,
    };
  },

  toHaveCssText(node: HTMLElement, css: string) {
    const val = node.style.cssText;

    if (val === css) {
      return {
        message: () => `expected "${val}" not to be equal style.cssText "${css}"`,
        pass: true,
      };
    }

    return {
      message: () => `expected "${val}" to be equal style.cssText "${css}"`,
      pass: false,
    };
  },
});