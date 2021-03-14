export let parseFromString = (html: string): Node[] => {
  let node = document.createElement('p');

  node.innerHTML = html;

  let childNodes = node.childNodes;
  let i = childNodes.length;
  let list: Node[] = Array(i);

  while (0 < i--) {
    list[i] = childNodes[i];
  }

  return list;
};
