/* eslint-disable no-cond-assign */
const svgNs = 'http://www.w3.org/2000/svg';
const xhtmlNs = 'http://www.w3.org/1999/xhtml';
const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

const properties = new Set([
  'value',
]);

const internalKeys = new Set([
  '_',
  'children',
  'ref',
]);

const extensions = new Map([
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

const appendChildren = (children, node) => {
  if (Array.isArray(children)) {
    // Just shorter that the .forEach
    children.some((child) => appendChildren(child, node));
  } else if (children !== false && children != null) {
    node.append(children);
  }
};

const Fragment = (children) => {
  const fragment = new DocumentFragment();

  appendChildren(children, fragment);
  return fragment;
};

const jsx = (tag, props) => {
  let key, val, node = props._
    ? document.createElementNS(props._, tag)
    : document.createElement(tag);

  for (key in props) {
    if (!internalKeys.has(key)) {
      val = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, val, key);
      } else if (properties.has(key) || key.startsWith('on')) {
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

  // reuse `key` variable
  if (key = props.ref) {
    if (typeof key === 'function') {
      key(node);
    } else {
      key.current = node;
    }
  }

  return node;
};

export {
  jsx,
  Fragment,
  appendChildren,
  properties,
  extensions,
  svgNs,
  mathmlNs,
  xhtmlNs
};
