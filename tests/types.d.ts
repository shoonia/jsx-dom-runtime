import 'vitest';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'web-component': Record<string, unknown>
    }
  }
}

interface CustomMatchers<R = unknown> {
  toHaveOuterHTML(html: string): R;
  toHaveInnerHTML(html: string): R;
  toBeTransform(source: string): Promise<R>;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContain extends CustomMatchers {}
}

export {};
