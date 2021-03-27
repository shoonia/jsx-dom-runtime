import { appendChildren } from './appendChildren';

let extends = new Map();

let properties = new Set([
  'className',
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

export let jsx = (el, props) => {
  if (typeof el === 'function') {
    return el(props);
  }

  if (el === '_ex') {
    for (let key in props) {
      extends.set(key, props[key]);
    }

    return;
  }

  let val;
  let node = typeof el === 'string' ? document.createElement(el) : el;

  for (let key in props) {
    if (key !== 'ref' && key !== 'children') {
      val = props[key];

      if (extends.has(key)) {
        extends.get(key)(node, val);
      } else if (properties.has(key)) {
        node[key] = val;
      } else if (key === 'style') {
        if (typeof val === 'string') {
          node.style.cssText = val;
        } else {
          // reuse `key` variable
          for (key in val) {
            if (key[0] === '-') {
              node.style.setProperty(key, val[key]);
            } else {
              node.style[key] = val[key];
            }
          }
        }
        // Benchmark for comparison (thanks preact): https://esbench.com/bench/574c954bdb965b9a00965ac6
      } else if (key[0] === 'o' && key[1] === 'n') {
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
    node.tagName === 'TEMPLATE' ? node.content : node,
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
