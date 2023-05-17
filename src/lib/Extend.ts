import { extensions } from '../jsxRuntime';

export const Extend = (props) => {
  for (let key in props) {
    extensions.set(key, props[key]);
  }
};
