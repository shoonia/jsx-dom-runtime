import T from './t';

export const element = {
  className: T.oneOfType([
    T.string,
    T.arrayOf(T.oneOfType([T.string, T.bool]))
  ]),
};
