import { TextareaHTMLAttributes } from '../..';
import T from './t';

export const textarea: TextareaHTMLAttributes = {
  autofocus: T.bool,
  autoFocus: T.bool,
  name: T.string,
  maxLength: T.number,
  minLength: T.number,
  placeholder: T.string,
  rows: T.number,
  cols: T.number,
  readOnly: T.bool,
  readonly: T.bool,
  required: T.bool,
};
