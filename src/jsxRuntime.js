import { appendChildren } from './appendChildren';
import { extensions } from './Extend';

let internalKeys = new Set([
  'ref',
  'children',
  '__ns',
]);

export let properties = new Set([
  'innerHTML',
  'value',
]);

export let jsx = (key, props) => {
  let val, node = props.__ns
    ? document.createElementNS('http://www.w3.org/2000/svg', key)
    : document.createElement(key);

  // reuse `key` variable
  for (key in props) {
    if (internalKeys.has(key)) {
      continue;
    }

    val = props[key];

    if (extensions.has(key)) {
      extensions.get(key)(node, val);
    } else if (key === 'style') {
      if (typeof val === 'string') {
        node.style.cssText = val;
      } else {
        // reuse `key` variable
        for (key in val) {
          if (key.startsWith('--')) {
            node.style.setProperty(key, val[key]);
          } else {
            node.style[key] = val[key];
          }
        }
      }
    } else if (properties.has(key) || key.startsWith('on') && key in node) {
      node[key] = val;
    } else if (val != null && (typeof val !== 'boolean' || key[4] === '-')) {
      node.setAttribute(key, val);
    } else if (val) {
      node.setAttribute(key, '');
    } else {
      node.removeAttribute(key);
    }
  }

  appendChildren(
    node.localName === 'template' ? node.content : node,
    props.children
  );

  // reuse `val` variable
  val = props.ref;

  if (val) {
    if (typeof val === 'function') {
      val(node);
    } else {
      val.current = node;
    }
  }

  return node;
};
