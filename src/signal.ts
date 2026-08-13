import type { Signal, SignalSubscriber } from '../index';
import { _s } from './symbol';

export const signal = (value = ''): Signal<string> => {
  let subs = new Set<SignalSubscriber<string>>();

  let subscribe = (sub: SignalSubscriber<string>) => {
    subs.add(sub);
    sub(value);
    return () => subs.delete(sub);
  };

  return {
    subscribe,

    get: () => value,

    set(val: string) {
      value = val;
      for (let sub of subs) sub(value);
    },

    [_s]: _s,

    _a(name: string) {
      const attr = document.createAttribute(name);
      subscribe((val) => attr.value = '' + val);
      return attr;
    },

    _t() {
      const text = new Text();
      subscribe((val) => text.data = '' + val);
      return text;
    },
  };
};
