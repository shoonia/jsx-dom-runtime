/* eslint-disable prefer-const */
const svgNs = 'http://www.w3.org/2000/svg';
const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

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

const appendChildren = (content, node) =>
  content !== false && content != null && (
    Array.isArray(content)
      ? content.forEach((i) => appendChildren(i, node))
      : node.append(content)
  );

const setRef = (content, node) =>
  content && (
    Array.isArray(content)
      ? content.forEach((i) => setRef(i, node))
      : typeof content == 'function'
        ? content(node)
        : content.current = node
  );

const Fragment = (content) => (
  appendChildren(content, content = new DocumentFragment()),
  content
);

const jsx = (tag, props, children?: any) => {
  let key, value, node = props._
    ? document.createElementNS(props._, tag)
    : document.createElement(tag, { is: props.is });

  for (key in props) {
    if (key != '_' && key != 'ref') {
      value = props[key];

      if (extensions.has(key)) {
        extensions.get(key)(node, value, key);
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
    children,
    tag == 'template' ? node.content : node,
  );

  setRef(props.ref, node);

  return node;
};

export {
  jsx,
  Fragment,
  appendChildren,
  extensions,
  svgNs,
  mathmlNs,
};
