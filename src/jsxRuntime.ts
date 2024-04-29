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
  ['style', (node, value, key) => {
    if (typeof value == 'string') {
      node.setAttribute(key, value);
    } else {
      // reuse `key` variable
      for (key in value) {
        if (key.startsWith('-')) {
          node.style.setProperty(key, value[key]);
        } else {
          node.style[key] = value[key];
        }
      }
    }
  }],
  ['$', (node, value, key) => {
    for (key in value) {
      node.addEventListener(key, value[key]);
    }
  }],
]);

const appendChildren = (content, node) => {
  if (Array.isArray(content)) {
    // Just shorter that the .forEach
    content.some((i) => appendChildren(i, node));
  } else if (content !== false && content != null) {
    node.append(content);
  }
};

const Fragment = (content) => {
  appendChildren(content, content = new DocumentFragment());
  return content;
};

const jsx = (tag, props) => {
  let key, value, node = props._
    ? document.createElementNS(props._, tag)
    : document.createElement(tag);

  for (key in props) {
    if (!internalKeys.has(key)) {
      value = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, value, key);
      } else if (properties.has(key) || key.startsWith('on')) {
        node[key] = value;
      } else if (value != null) {
        if (typeof value != 'boolean' || key.startsWith('-', 4)) {
          node.setAttribute(key, value);
        } else if (value) {
          node.setAttribute(key, '');
        }
      }
    }
  }

  appendChildren(
    props.children,
    tag == 'template' ? node.content : node,
  );

  // reuse `value` variable
  if (value = props.ref) {
    if (typeof value == 'function') {
      value(node);
    } else {
      value.current = node;
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
