import T from './t';

export const element = {
  accesskey: T.string,
  accessKey: T.string,
  id: T.string,
  dir: T.string,
  lang: T.string,
  title: T.string,
  class: T.string,
  className: T.oneOfType([
    T.string,
    T.array,
  ]),
  style: T.oneOfType([
    T.string,
    T.object,
  ]),
  tabindex: T.number,
  tabIndex: T.number,
  hidden: T.bool,
  textContent: T.string,
  innerHTML: T.string,
};
