/* eslint-disable no-cond-assign */
import { appendChildren } from './appendChildren';

const internalKeys = new Set([
  'ref',
  'children',
  '__ns',
]);

export const extensions = new Map();

export const properties = new Set([
  'value',
]);

export const jsx = (tag, props) => {
  let key, val, node = props.__ns
    ? document.createElementNS(props.__ns, tag)
    : document.createElement(tag);

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
    }
  }

  appendChildren(
    tag === 'template' ? node.content : node,
    props.children,
  );

  // reuse `val` variable
  if (val = props.ref) {
    if (typeof val === 'function') {
      val(node);
    } else {
      val.current = node;
    }
  }

  return node;
};
