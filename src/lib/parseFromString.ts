export let parseFromString = (html: string): Node[] => {
  let node = document.createElement(
    /* just the shorter tag name than the `div` */
    'p'
  );

  node.innerHTML = html;

  return [].slice.call(node.childNodes);
};
