declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveOuterHTML(html: string): R;
    }
  }
}

export {};
