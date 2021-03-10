import { doc, isArray } from './util';

export let appendChildren = (node, children) => {
  if (children != null && children !== false) {
    if (isArray(children)) {
      for (let i = 0; children.length > i;) {
        appendChildren(node, children[i++]);
      }
    } else {
      node.appendChild(
        typeof children.nodeType !== 'number'
          ? doc.createTextNode(children)
          : children
      );
    }
  }
};
