import { extensions } from 'jsx-dom-runtime';

export const initStyle = () =>
  /*#__PURE__*/ extensions.set('style', (node: HTMLElement, value, key) => {
    if (typeof value == 'string') {
      node.setAttribute(key, value);
    } else {
    // reuse `key` variable
      for (key in value) {
        if (key.startsWith('-')) {
          node.style.setProperty(key, value[key]);
        } else {
          node.style[key] = value[key];
        }
      }
    }
  });
