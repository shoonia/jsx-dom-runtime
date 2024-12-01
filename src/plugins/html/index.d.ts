export declare function initHtml(): void

declare global {
  namespace JSX {
    interface OverrideAttributes {
      innerHTML?: string
      textContent?: string
    }
  }
}
