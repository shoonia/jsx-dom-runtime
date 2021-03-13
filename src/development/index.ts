import { jsx } from '../jsxRuntime';
import { Fragment } from '../Fragment';
import { specMap } from './specMap';

const propTypes = (tagName: string, spec, prop) => {
  for (const propName in spec) {
    let error;

    try {
      error = spec[propName](prop, propName);
    } catch (ex) {
      error = ex;
    }

    if (error != null) {
      console.error(`<${tagName}> :`, error.message);
      break;
    }
  }
};

const jsxDev = (el: unknown, props: Record<string, unknown>): void => {
  if (typeof el === 'string') {
    if (specMap.has(el)) {
      propTypes(el, specMap.get(el), props);
    }
  }

  return jsx(el, props);
};

export {
  jsxDev as jsx,
  jsxDev as jsxs,
  Fragment,
};
