export let parseFromString = (html: string): Node[] => {
  /* just the shorter tag name than the `div` */
  let node = document.createElement('p');

  node.innerHTML = html;

  return [].slice.call(node.childNodes);
};
