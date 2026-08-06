export const setStyle = (node, value) => {
  if (typeof value == 'string') {
    node.style.cssText = value;
  } else {
    for (let key in value) {
      if (key.startsWith('-')) {
        node.style.setProperty(key, value[key]);
      } else {
        node.style[key] = value[key];
      }
    }
  }
};

export const setDataset = (node, value) => {
  for (let key in value) {
    if (value[key] != null) {
      node.dataset[key] = value[key];
    }
  }
};

export const setAttributes = (node, value) =>
  (Array.isArray(value) ? value : [value]).forEach(
    (i) => node.setAttributeNode(i));
