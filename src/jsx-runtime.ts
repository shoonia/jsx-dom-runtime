const properties = new Set([
  'innerHTML',
  'innerText',
  'textContent',
  'value',
]);

const isNil = (val: unknown) => val == null;
const isString = (val: unknown): val is string => typeof val === 'string';
const isNumber = (val: unknown): val is number => typeof val === 'number';
const isFunction = (val: unknown) => typeof val === 'function';

const className = (val) => Array.isArray(val)
  ? val.filter(Boolean).join(' ')
  : val;

const appendChildren = (node: Element, children) => {
  if (!isNil(children) && children !== false) {
    if (Array.isArray(children)) {
      for (const child of children) {
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

type M = HTMLElementTagNameMap;

const h = <T extends keyof M>(tagName: T, props): M[T] => {
  const node = document.createElement<T>(tagName);

  for (const key in props) {
    const val = props[key];

    if (key === 'style') {
      if (isString(val)) {
        node.style.cssText = val;
      } else {
        for (const s in val) {
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
      const name = key.toLowerCase();

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

export {
  h,
  h as jsx,
  h as jsxs,
};
