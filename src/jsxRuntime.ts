/* eslint-disable prefer-const */
const svgNs = 'http://www.w3.org/2000/svg';
const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

const setStyle = (node, value) => {
  if (typeof value == 'string') {
    node.style.cssText = value;
  } else {
    for (let key in value) {
      if (key.startsWith('-')) {
        node.style.setProperty(key, value[key]);
      } else {
        node.style[key] = value[key];
      }
    }
  }
};

const setDataset = (node, value) => {
  for (let key in value) {
    if (value[key] != null) {
      node.dataset[key] = value[key];
    }
  }
};

const setAttributes = (node, value) =>
  (Array.isArray(value) ? value : [value]).forEach(node.setAttributeNode, node);

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

      if (key == '$') {
        for (key in value) {
          node.addEventListener(key, value[key]);
        }
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
  setStyle,
  setDataset,
  setAttributes,
  svgNs,
  mathmlNs,
};
