export let events = (ready) => {
  return (node: HTMLElement) => {
    let on = (type, listener, options) => {
      node.addEventListener(type, listener, options);
    };

    let off = (type, listener, options) => {
      node.removeEventListener(type, listener, options);
    };

    ready(on, off, node);
  };
};
