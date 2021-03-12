import T from './t';

export const element = {
  id: T.string,
  dir: T.string,
  lang: T.string,
  title: T.string,
  class: T.string,
  className: T.oneOfType([
    T.string,
    T.arrayOf(T.oneOfType([T.string, T.bool]))
  ]),
  style: T.string,
  tabindex: T.number,
  tabIndex: T.number,
  hidden: T.bool,
  textContent: T.string,
  innerHTML: T.string,
};
