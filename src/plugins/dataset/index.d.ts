export declare function initDataset(): void

declare global {
  namespace JSX {
    interface OverrideAttributes {
      dataset?: DOMStringMap
    }
  }
}
