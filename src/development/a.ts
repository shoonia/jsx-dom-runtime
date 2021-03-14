import T from './t';

export const a = {
  href: T.string.isRequired,
  rel: T.string,
  download: T.string,
  type: T.string,
  target: T.oneOf([
    '_blank',
    '_self',
    '_parent',
    '_top',
  ]),
};
