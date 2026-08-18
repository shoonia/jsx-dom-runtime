import type { Signal, SignalListener } from '../index';
import { _s } from './_s';

export const signal = (value: any = ''): Signal<any> => {
  let subs = new Set<SignalListener<any>>();

  let on = (fn: SignalListener<any>) => {
    subs.add(fn);
    fn(value);
    return () => subs.delete(fn);
  };

  return {
    on,

    get: () => value,

    set(val: any) {
      value = val;
      for (val of subs) val(value);
    },

    [_s]: _s,

    _a(name: any) {
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
