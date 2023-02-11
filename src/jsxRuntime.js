import { appendChildren } from './appendChildren';
import { extensions } from './Extend';

let properties = new Set([
  'innerHTML',
  'textContent',
  'value',
]);

let ignoreKeys = new Set([
  'ref',
  'children',
  '__ns',
]);

export let jsx = (node, props) => {
  let key, val;

  if (typeof node === 'function') {
    return node(props);
  }

  node = typeof node === 'string'
    ? props.__ns
      ? document.createElementNS('http://www.w3.org/2000/svg', node)
      : document.createElement(node)
    : node;

  for (key in props) {
    if (!ignoreKeys.has(key)) {
      val = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, val);
      } else if (properties.has(key) || key.startsWith('on')) {
        if (key in node) {
          node[key] = val;
        }
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
      } else if (val != null) {
        if (typeof val !== 'boolean' || /^(ari|dat)a-/.test(key)) {
          node.setAttribute(key, val);
        } else if (val) {
          node.setAttribute(key, '');
        } else {
          node.removeAttribute(key);
        }
      } else {
        node.removeAttribute(key);
      }
    }
  }

  appendChildren(
    node.localName === 'template' ? node.content : node,
    props.children
  );

  // reuse `val` variable
  val = props.ref;

  if (val != null) {
    if (typeof val === 'function') {
      val(node);
    } else {
      val.current = node;
    }
  }

  return node;
};
