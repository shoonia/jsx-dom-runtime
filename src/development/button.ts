import T from './t';

export const button = {
  type: T.oneOf([
    'button',
    'reset',
    'submit',
  ]),
};
