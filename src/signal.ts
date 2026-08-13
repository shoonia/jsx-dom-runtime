import type { Signal, SignalListener } from '../index';
import { _s } from './_s';

export const signal = (value = ''): Signal<string> => {
  let subs = new Set<SignalListener<string>>();

  let on = (fn: SignalListener<string>) => {
    subs.add(fn);
    fn(value);
    return () => subs.delete(fn);
  };

  return {
    on,

    get: () => value,

    set(val: string) {
      value = val;
      for (let sub of subs) sub(value);
    },

    [_s]: _s,

    _a(name: string) {
      const attr = document.createAttribute(name);
      on((val) => attr.value = val);
      return attr;
    },

    _t() {
      const text = new Text();
      on((val) => text.data = val);
      return text;
    },
  };
};
