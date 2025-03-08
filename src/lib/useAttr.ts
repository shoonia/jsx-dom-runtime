import { _JsxAttr } from '../jsxRuntime';

class JsxAttr extends _JsxAttr {
  private $ = new Set<Attr>();
  private v;

  constructor(value) {
    super();
    this.v = value;
  }

  _(node: Element, attr) {
    node.setAttributeNode(attr = document.createAttribute(attr));
    attr.value = this.v;
    this.$.add(attr);
  }

  value(v) {
    this.v = v;
    this.$.forEach((a) => a.value = v);
  }
}

export const useAttr = (value) =>/*#__PURE__*/new JsxAttr(value);
