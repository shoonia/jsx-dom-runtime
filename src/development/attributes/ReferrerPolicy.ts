import T from '../t';

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

export const ReferrerPolicy = {
  referrerPolicy,
  referrerpolicy: referrerPolicy,
};
