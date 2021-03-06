declare global {
  namespace jest {
    interface Matchers<R> {
      toBeHaveOuterHTML(html: string): R;
    }
  }
}

export {};
