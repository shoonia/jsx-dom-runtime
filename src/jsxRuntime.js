import { appendChildren } from './appendChildren';

import {
  isNotNil,
  isString,
  isFunction,
  isBoolean,
  isArray,
  doc,
} from './util';

let properties = new Set([
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

export let jsx = (el, props) => {
  if (isFunction(el)) {
    return el(props);
  }

  let node = isString(el) ? doc.createElement(el) : el;
  let ref = props.ref;

  for (let key in props) {
    let val = props[key];

    if (key === 'ref') {
      // noop
    } else if (key === 'className') {
      node.setAttribute(
        'class',
        isArray(val)
          ? val.filter(Boolean).join(' ')
          : val
      );
    } else if (key === 'children') {
      appendChildren(node, val);
    } else if (properties.has(key)) {
      node[key] = val;
    } else if (key === 'style') {
      if (isString(val)) {
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
    } else if (isBoolean(val) && !/^(aria|data)-/.test(key)) {
      node[key] = val;
    } else if (isNotNil(val)) {
      node.setAttribute(key, '' + val);
    }
  }

  if (isNotNil(ref)) {
    if ('current' in ref) {
      ref.current = node;
    } else if (isFunction(ref)) {
      ref(node);
    }
  }

  return node;
};
