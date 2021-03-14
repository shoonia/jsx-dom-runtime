import { isArray, doc } from './util';
import { appendChildren } from './appendChildren';

let properties = new Set([
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

export let jsx = (el, props) => {
  if (typeof el === 'function') {
    return el(props);
  }

  let node = typeof el === 'string' ? doc.createElement(el) : el;
  let ref = props.ref;

  for (let key in props) {
    if (key !== 'ref' && key !== 'children') {
      let val = props[key];

      if (key === 'className') {
        node.setAttribute(
          'class',
          isArray(val)
            ? val.filter(Boolean).join(' ')
            : val
        );
      } else if (properties.has(key)) {
        node[key] = val;
      } else if (key === 'style') {
        if (typeof val === 'string') {
          node.style.cssText = val;
        } else {
          for (let s in val) {
            node.style[s] = val[s];
          }
        }
        // Benchmark for comparison (thanks preact): https://esbench.com/bench/574c954bdb965b9a00965ac6
      } else if (key[0] === 'o' && key[1] === 'n') {
        let name = key.toLowerCase();

        if (name in node) {
          node[name] = val;
        }
      } else if (typeof val === 'boolean' && !/^(aria|data)-/.test(key)) {
        node[key] = val;
      } else if (val != null) {
        node.setAttribute(key, '' + val);
      }
    }
  }

  appendChildren(node, props.children);

  if (ref != null) {
    if (typeof ref === 'function') {
      ref(node);
    } else {
      ref.current = node;
    }
  }

  return node;
};
