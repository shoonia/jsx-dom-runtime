import { jsx } from '../jsxRuntime';
import { Fragment } from '../Fragment';
import { specMap } from './specMap';

const propTypes = (spec, prop) => {
  for (const propName in spec) {
    let error;

    try {
      error = spec[propName](prop, propName);
    } catch (ex) {
      error = ex;
    }

    if (error != null) {
      return console.log(error.message);
    }
  }
};

const jsxDevCheck = (el: unknown, props: Record<string, any>) => {
  if (typeof el === 'string') {
    if (specMap.has(el)) {
      propTypes(specMap.get(el), props);
    }
  }

  return jsx(el, props);
};

export {
  jsxDevCheck as jsx,
  jsxDevCheck as jsxs,
  Fragment,
};
