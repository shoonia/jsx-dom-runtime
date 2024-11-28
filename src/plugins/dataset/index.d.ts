export declare function initDataset(): void

declare global {
  namespace JSX {
    interface Attributes {
      dataset?: Record<string, string | null | undefined>
    }
  }
}
