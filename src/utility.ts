import { _s } from './_s';

export const setSignalish = (value, fn) =>
  value?.[_s] ? value.on(fn) : fn(value);

export const setStyle = (node, value) =>
  setSignalish(value, (val) => {
    if (typeof val == 'string') {
      node.style.cssText = val;
    } else {
      for (let key in val) {
        if (key.startsWith('-')) node.style.setProperty(key, val[key]);
        else node.style[key] = val[key];
      }
    }
  });

export const setDataset = (node, value) => {
  for (let key in value) {
    if (value[key] != null) {
      node.dataset[key] = value[key];
    }
  }
};

export const setAttributes = (node, value) =>
  (Array.isArray(value) ? value : [value]).forEach((i) =>
    node.setAttributeNode(i),
  );
