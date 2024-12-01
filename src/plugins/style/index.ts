import { extensions } from '../../jsx-runtime';

export const initStyle = () => /*#__PURE__*/
  extensions.set('style', (node, value, key) => {
    if (typeof value == 'string') {
      node.setAttribute(key, value);
    } else {
      for (key in value) {
        if (key.startsWith('-')) {
          node.style.setProperty(key, value[key]);
        } else {
          node.style[key] = value[key];
        }
      }
    }
  });
