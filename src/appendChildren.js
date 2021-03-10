import { doc, isArray, isNotNil, isNumber } from './util';

export let appendChildren = (node, children) => {
  if (isNotNil(children) && children !== false) {
    if (isArray(children)) {
      for (let i = 0; children.length > i;) {
        appendChildren(node, children[i++]);
      }
    } else {
      node.appendChild(
        isNumber(children.nodeType)
          ? children
          : doc.createTextNode(children)
      );
    }
  }
};
