import { AnchorHTMLAttributes } from '../..';
import T from './t';

const referrerPolicy = T.oneOf<ReferrerPolicy>([
  '',
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
]);

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
  referrerPolicy,
  referrerpolicy: referrerPolicy,
};
