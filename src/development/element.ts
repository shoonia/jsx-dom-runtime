import T from './t';

const contentEditable = T.oneOfType([
  T.booleanish,
  T.oneOf(['inherit'])
]);

export const element = {
  accesskey: T.string,
  accessKey: T.string,
  id: T.string,
  dir: T.string,
  lang: T.string,
  title: T.string,
  class: T.string,
  style: T.oneOfType([
    T.string,
    T.object,
  ]),
  tabindex: T.number,
  tabIndex: T.number,
  hidden: T.bool,
  spellCheck: T.oneOf(['true', 'false']),
  spellcheck: T.oneOf(['true', 'false']),
  contentEditable,
  contenteditable: contentEditable,
  textContent: T.string,
  innerHTML: T.string,
};
