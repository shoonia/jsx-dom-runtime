export let appendChildren = (node, children) => {
  if (Array.isArray(children)) {
    for (let i = 0; children.length > i;) {
      appendChildren(node, children[i++]);
    }
  } else if (children != null && children !== false) {
    node.appendChild(
      children.nodeType > 0
        ? children
        : document.createTextNode(children)
    );
  }
};
