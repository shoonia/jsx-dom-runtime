declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveOuterHTML(html: string): R;
      toHaveInnerHTML(html: string): R;
    }
  }
}

export {};
