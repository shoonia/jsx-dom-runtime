import { InputHTMLAttributes } from '../..';
import T from './t';

export const input: InputHTMLAttributes = {
  type: T.oneOf([
    'text',
    'password',
    'tel',
    'checkbox',
    'radio',
    'button',
    'search',
    'color',
    'date',
    'datetime',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'range',
    'reset',
    'submit',
    'time',
    'url',
    'week',
    'datetime-local',
  ]),
  value: T.oneOfType([
    T.string,
    T.number,
  ]),
};
