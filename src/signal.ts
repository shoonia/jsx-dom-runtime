import type { Signal } from '../index';
import { sig } from './symbol';

type Sub = (value: string) => void;

export const signal = (value = ''): Signal<string> => {
  const subs: Sub[] = [];

  return {
    [sig]: sig,

    get value() {
      return value;
    },

    set(val: string) {
      if (value != val) {
        value = val;
        for (let sub of subs) sub(value);
      }
    },

    attr(name: string) {
      const attr = document.createAttribute(name);
      attr.value = value;
      subs.push((val) => attr.value = val);
      return attr;
    },

    text() {
      const text = new Text(value);
      subs.push((val) => text.data = val);
      return text;
    },
  };
};
