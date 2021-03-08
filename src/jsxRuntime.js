let properties = new Set([
  'innerHTML',
  'innerText',
  'textContent',
  'value',
  'htmlFor',
]);

let isNotNil = (val) => val != null;
let isString = (val) => typeof val === 'string';
let isNumber = (val) => typeof val === 'number';
let isFunction = (val) => typeof val === 'function';
let isBoolean = (val) => typeof val === 'boolean';

let isArray = Array.isArray;
let doc = document;

let className = (val) => isArray(val)
  ? val.filter(Boolean).join(' ')
  : val;

let appendChildren = (node, children) => {
  if (isNotNil(children) && children !== false) {
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
  let ref = props.ref;

  let setAttribute = (key, val) => {
    node.setAttribute(key, val);
  };

  for (let key in props) {
    let val = props[key];

    if (key === 'ref') {
      // noop
    } else if (key === 'className') {
      setAttribute('class', className(val));
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
    // Benchmark for comparison (thanks preact): https://esbench.com/bench/574c954bdb965b9a00965ac6
    } else if (key[0] === 'o' && key[1] === 'n' && isFunction(val)) {
      let name = key.toLowerCase();

      if (name in node) {
        node[name] = val;
      }
    } else if (isNotNil(val)) {
      if (isBoolean(val)) {
        if (/^(aria|data)-/.test(key)) {
          setAttribute(key, String(val));
        } else if (val) {
          setAttribute(key, '');
        } else {
          node.removeAttribute(key);
        }
      } else {
        setAttribute(key, String(val));
      }
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

export {
  jsx,
  jsx as jsxs,
  Fragment,
};
