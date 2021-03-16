import { AnchorHTMLAttributes } from '../..';
import T from './t';

export const a: AnchorHTMLAttributes = {
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
