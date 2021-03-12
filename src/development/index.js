import { jsx } from '../jsxRuntime';
import { Fragment } from '../Fragment';
import { checkTypes } from './props';
import { map } from './map';

let jsxDevCheck = (el, props) => {
  if (typeof el === 'string') {
    if (map.has(el)) {
      checkTypes(map.get(el), props, 'prop');
    }
  }

  return jsx(el, props);
};

export {
  jsxDevCheck as jsx,
  jsxDevCheck as jsxs,
  Fragment,
};
