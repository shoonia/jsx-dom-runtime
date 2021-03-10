declare global {
  const __DEV__: boolean;

  namespace jest {
    interface Matchers<R> {
      toHaveOuterHTML(html: string): R;
    }
  }
}

export {};
