import { appendChildren } from './appendChildren';
import { extensions } from './extend';

let properties = new Set([
  'className',
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

export let jsx = (node, props) => {
  let key, val;

  if (typeof node === 'function') {
    return node(props);
  }

  node = typeof node === 'string' ? document.createElement(node) : node;

  for (key in props) {
    if (key !== 'ref' && key !== 'children') {
      val = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, val);
      } else if (properties.has(key)) {
        node[key] = val;
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
      } else if (key.startsWith('on')) {
        key = key.toLowerCase();

        if (key in node) {
          node[key] = val;
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
