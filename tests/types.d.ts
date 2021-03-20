declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveOuterHTML(html: string): R;
      toHaveInnerHTML(html: string): R;
      toHaveCssText(css: string): R;
    }
  }
}

export {};
