import { extensions } from 'jsx-dom-runtime';

export const initDataset = () => /*#__PURE__*/
  extensions.set('dataset', (
    node: HTMLElement | SVGAElement | MathMLElement,
    value: DOMStringMap,
    key: string,
  ) => {
    for (key in value) {
      if (value[key] != null) {
        node.dataset[key] = value[key];
      }
    }
  });
