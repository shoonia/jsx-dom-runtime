export declare function initHtml(): void

declare global {
  namespace JSX {
    interface Attributes {
      innerHTML?: string
      textContent?: string
    }
  }
}
