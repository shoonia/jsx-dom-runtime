import { doc, isArray } from './util';

export let appendChildren = (node, children) => {
  if (children != null && children !== false) {
    if (isArray(children)) {
      for (let i = 0; children.length > i;) {
        appendChildren(node, children[i++]);
      }
    } else {
      node.appendChild(
        children.nodeType > 0
          ? children
          : doc.createTextNode(children)
      );
    }
  }
};
