import T from './t';

export const img = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
  width: T.number,
  height: T.number,
  srcset: T.string,
  sizes: T.string,
  loading: T.oneOf([
    'lazy',
    'eager',
    'auto',
  ]),
  decoding: T.oneOf([
    'async',
    'sync',
    'auto'
  ]),
};
