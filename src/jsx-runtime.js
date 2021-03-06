let properties = new Set([
  'innerHTML',
  'innerText',
  'textContent',
  'value',
]);

let isNil = (val) => val == null;
let isString = (val) => typeof val === 'string';
let isNumber = (val) => typeof val === 'number';
let isFunction = (val) => typeof val === 'function';

let className = (val) => Array.isArray(val)
  ? val.filter(Boolean).join(' ')
  : val;

let appendChildren = (node, children) => {
  if (!isNil(children) && children !== false) {
    if (Array.isArray(children)) {
      for (let child of children) {
        appendChildren(node, child);
      }
    } else {
      node.appendChild(
        isNumber(children.nodeType)
          ? children
          : document.createTextNode(children)
      );
    }
  }
};

let h = (tagName, props) => {
  let node = document.createElement(tagName);

  for (let key in props) {
    let val = props[key];

    if (key === 'style') {
      if (isString(val)) {
        node.style.cssText = val;
      } else {
        for (let s in val) {
          node.style[s] = val[s];
        }
      }
    } else if (key === 'className') {
      node.setAttribute('class', className(val));
    } else if (key === 'children') {
      appendChildren(node, val);
    } else if (properties.has(key) && key in node) {
      node[key] = val;
    } else if (key[0] === 'o' && key[1] === 'n') {
      let name = key.toLowerCase();

      if (name in node) {
        if (isNil(val)) {
          node[name] = null;
        } else if (isFunction(val)) {
          node[name] = val;
        }
      }
    } else if (!isNil(val)) {
      node.setAttribute(key, String(val));
    }
  }

  return node;
};

module.exports = {
  h,
  jsx: h,
  jsxs: h,
};
