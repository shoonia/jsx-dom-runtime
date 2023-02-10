export let extensions = new Map();

export let extend = (props) => {
  for (let key in props) {
    extensions.set(key, props[key]);
  }
};
