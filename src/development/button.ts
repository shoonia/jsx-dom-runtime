import { ButtonHTMLAttributes } from '../..';
import T from './t';

export const button: ButtonHTMLAttributes = {
  disabled: T.bool,
  type: T.oneOf([
    'button',
    'reset',
    'submit',
  ]),
  value: T.string,
  name: T.string,
};
