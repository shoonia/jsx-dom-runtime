import '@testing-library/jest-dom';

expect.extend({
  toHaveOuterHTML(node, html) {
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
});
