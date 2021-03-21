export let events = (ready) => (node: HTMLElement) => {
  ready((type, listener, options) => {
    node.addEventListener(type, listener, options);
  }, (type, listener, options) => {
    node.removeEventListener(type, listener, options);
  }, node);
};
