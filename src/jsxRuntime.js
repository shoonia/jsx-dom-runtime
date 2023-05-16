import { appendChildren } from './appendChildren';

let internalKeys = new Set([
  'ref',
  'children',
  '__ns',
]);

export let extensions = new Map();

export let properties = new Set([
  'value',
]);

export let jsx = (tag, props) => {
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
