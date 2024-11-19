import type { Properties } from 'csstype';

export interface CSSProperties extends Properties<number | string> {
  cssText?: string | null
  [key: `--${string}`]: number | string
}

export declare function initStyle(): void

declare global {
  namespace JSX {
    interface Attributes {
      style?: string | CSSProperties
    }
  }
}
