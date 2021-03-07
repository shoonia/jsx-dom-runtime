let properties = new Set([
  'innerHTML',
  'innerText',
  'textContent',
  'value',
  'htmlFor',
]);

let isNil = (val) => val == null;
let isString = (val) => typeof val === 'string';
let isNumber = (val) => typeof val === 'number';
let isFunction = (val) => typeof val === 'function';

let isArray = Array.isArray;
let doc = document;

let className = (val) => isArray(val)
  ? val.filter(Boolean).join(' ')
  : val;

let appendChildren = (node, children) => {
  if (!isNil(children) && children !== false) {
    if (isArray(children)) {
      for (let i = 0; children.length > i;) {
        appendChildren(node, children[i++]);
      }
    } else {
      node.appendChild(
        isNumber(children.nodeType)
          ? children
          : doc.createTextNode(children)
      );
    }
  }
};

let Fragment = ({ children }) => {
  let fragment = doc.createDocumentFragment();

  appendChildren(fragment, children);
  return fragment;
};

let jsx = (el, props) => {
  if (isFunction(el)) {
    return el(props);
  }

  let node = doc.createElement(el);

  for (let key in props) {
    let val = props[key];

    if (key === 'className') {
      node.setAttribute('class', className(val));
    } else if (key === 'children') {
      appendChildren(node, val);
    } else if (properties.has(key) && key in node) {
      node[key] = val;
    } else if (key === 'style') {
      if (isString(val)) {
        node.style.cssText = val;
      } else {
        for (let s in val) {
          node.style[s] = val[s];
        }
      }
    } else if (key[0] === 'o' && key[1] === 'n' && isFunction(val)) {
      let name = key.toLowerCase();

      if (name in node) {
        node[name] = val;
      }
    } else if (!isNil(val)) {
      node.setAttribute(key, String(val));
    }
  }

  return node;
};

export {
  jsx,
  jsx as jsxs,
  Fragment,
};
