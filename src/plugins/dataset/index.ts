import { extensions } from '../../jsx-runtime';

export const initataset = () => /*#__PURE__*/
  extensions.set('dataset', (
    node: HTMLElement | SVGAElement,
    value: Record<string, string | null | undefined>
  ) => {
    for (const key in value) {
      if (value[key] != null) {
        node.dataset[key] = value[key];
      }
    }
  });
