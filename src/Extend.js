export let extensions = new Map();

export let Extend = (props) => {
  for (let key in props) {
    extensions.set(key, props[key]);
  }
};
