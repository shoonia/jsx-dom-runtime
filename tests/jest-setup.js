require('@testing-library/jest-dom');

expect.extend({
  toBeHaveOuterHTML(node, html) {
    const val = node.outerHTML;

    if (val === html) {
      return {
        message: () => `expected "${val}" not to be equal outerHTML "${html}"`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected "${val}" to be equal outerHTML "${html}"`,
        pass: false,
      };
    }
  },
});
