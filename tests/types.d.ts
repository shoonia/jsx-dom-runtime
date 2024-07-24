declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveOuterHTML(html: string): R;
      toHaveInnerHTML(html: string): R;
      toHaveCssText(css: string): R;
      toBeTransform(source: string): Promise<R>;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      'web-component': Record<string, unknown>
    }
  }
}

export {};
