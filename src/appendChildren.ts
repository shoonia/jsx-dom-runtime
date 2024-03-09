export const appendChildren = (children, node) => {
  if (Array.isArray(children)) {
    // Just shorter that the .forEach
    children.some((child) => appendChildren(child, node));
  } else if (children !== false && children != null) {
    node.append(children);
  }
};
