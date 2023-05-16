import { extensions } from './jsxRuntime';

export let Extend = (props) => {
  for (let key in props) {
    extensions.set(key, props[key]);
  }
};
