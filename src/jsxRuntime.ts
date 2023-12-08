/* eslint-disable no-cond-assign */
import { appendChildren } from './appendChildren';

const internalKeys = new Set([
  'ns',
  'children',
  'ref',
]);

export const extensions = new Map([
  ['style', (node, val, key) => {
    if (typeof val === 'string') {
      node.setAttribute(key, val);
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
  }],
]);

export const properties = new Set([
  'value',
]);

export const jsx = (tag, props) => {
  let key, val, node = props.ns
    ? document.createElementNS(props.ns, tag)
    : document.createElement(tag);

  for (key in props) {
    if (!internalKeys.has(key)) {
      val = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, val, key);
      } else if (properties.has(key) || key.startsWith('on') && key in node) {
        node[key] = val;
      } else if (val != null && (typeof val !== 'boolean' || key[4] === '-')) {
        node.setAttribute(key, val);
      } else if (val) {
        node.setAttribute(key, '');
      }
    }
  }

  appendChildren(
    props.children,
    tag === 'template' ? node.content : node,
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
