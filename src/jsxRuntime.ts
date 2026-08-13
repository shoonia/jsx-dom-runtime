import { _s } from './_s';

const svgNs = 'http://www.w3.org/2000/svg';
const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

const render = (content, node) =>
  content !== false && content != null && (
    Array.isArray(content)
      ? content.forEach((i) => render(i, node))
      : node.append(content[_s] ? content._t() : content)
  );

const setRef = (content, node) =>
  content && (
    Array.isArray(content)
      ? content.forEach((i) => setRef(i, node))
      : typeof content == 'function'
        ? content(node)
        : content.current = node
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
        if (value[_s]) {
          node.setAttributeNode(value._a(key));
        } else if (typeof value != 'boolean' || key.startsWith('-', 4)) {
          node.setAttribute(key, value);
        } else if (value) {
          node.setAttribute(key, '');
        }
      }
    }
  }

  render(
    children,
    tag == 'template' ? node.content : node,
  );

  setRef(props.ref, node);

  return node;
};

export {
  jsx,
  render,
  svgNs,
  mathmlNs,
};
