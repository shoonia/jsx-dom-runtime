export let appendChildren = (node, children) => {
  if (Array.isArray(children)) {
    // Just shorter that the .forEach
    children.some((child) => appendChildren(node, child));
  } else if (children != null && children !== false) {
    node.append(children);
  }
};
