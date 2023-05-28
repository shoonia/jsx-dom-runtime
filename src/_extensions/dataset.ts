import { extensions } from '../jsx-runtime';

declare global {
  namespace JSX {
    interface Attributes {
      dataset?: Record<string, string | number | null | undefined | boolean>;
    }
  }
}

export const dataset = (): void => {
  extensions.set('dataset', (
    node: HTMLElement | SVGElement | MathMLElement,
    value: JSX.Attributes['dataset']
  ): void => {
    for (let key in value) {
      if (value[key] != null) {
        node.dataset[key] = '' + value[key];
      }
    }
  });
};
