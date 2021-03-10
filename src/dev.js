import { isFunction, isString } from './util';

export const validateEl = (el) => {
  if (isString(el)) {
    // TODO:
  } else if (el instanceof Element) {
    // TODO:
  } else if (isFunction(el)) {
    // TODO:
  } else {
    console.log();
  }
};

export const validatePros = (props) => {
  for (let key in props) {
    key;
    // TODO:
  }
};
