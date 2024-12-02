import type { Properties } from 'csstype';

export declare function initStyle(): void

export interface CSSProperties extends Properties<number | string> {
  cssText?: string | null
  [key: `--${string}`]: number | string
}

declare global {
  namespace JSX {
    interface OverrideAttributes {
      style?: string | CSSProperties
    }
  }
}
