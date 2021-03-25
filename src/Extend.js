export let plugins = new Map();

export let Extend = (obj) => {
  for (let key in obj) {
    plugins.set(key, obj[key]);
  }
};
