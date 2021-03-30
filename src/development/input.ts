import { InputHTMLAttributes } from '../..';
import T from './t';

const inputMode = T.oneOf([
  'none',
  'text',
  'tel',
  'url',
  'email',
  'numeric',
  'decimal',
  'search'
]);

const enterKeyHint = T.oneOf([
  'enter',
  'done',
  'go',
  'next',
  'previous',
  'search',
  'send'
]);

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
  name: T.string,
  inputMode,
  inputmode: inputMode,

  enterKeyHint,
  enterkeyhint: enterKeyHint,
};
