import T from './t';

export const img = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
  // width // TODO:
  // height // TODO:
  srcset: T.string,
  sizes: T.string,
};
