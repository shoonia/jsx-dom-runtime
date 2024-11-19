/* eslint-disable no-cond-assign, prefer-const */
const svgNs = 'http://www.w3.org/2000/svg';
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
  ['$', (node, value, key) => {
    for (key in value) {
      node.addEventListener(key, value[key]);
    }
  }],
]);

const appendChildren = (content, node) =>
  Array.isArray(content)
    // Just shorter that the .forEach
    ? content.some((i) => appendChildren(i, node))
    : content !== false && content != null && node.append(content);

const Fragment = (content) => (
  appendChildren(content, content = new DocumentFragment()),
  content
);

const jsx = (tag, props) => {
  let key, value, node = props._
    ? document.createElementNS(props._, tag)
    : document.createElement(tag, props.is ? { is: props.is } : key);

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
};
