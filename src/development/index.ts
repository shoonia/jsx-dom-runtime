import { jsx } from '../jsxRuntime';
import { Fragment } from '../Fragment';
import { specMap } from './specMap';

type Props = Record<string, unknown>;

interface IStack {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
}

const propTypes = (tagName: string, spec, props: Props, stack: IStack) => {
  for (const key in props) {
    let error;

    try {
      error = spec[key](key, props[key]);
    } catch (ex) {
      error = ex;
    }

    if (error != null) {
      console.error(
        `${error?.message}\n\n`,
        `<${tagName}> at [${stack.lineNumber}:${stack.columnNumber}] - ${stack.fileName}`,
      );

      break;
    }
  }
};

const jsxDEV = (
  el: unknown,
  props: Record<string, unknown>,
  _,
  __,
  stack: IStack,
): void => {
  if (typeof el === 'string') {
    if (specMap.has(el)) {
      propTypes(el, specMap.get(el), props, stack);
    }
  }

  return jsx(el, props);
};

export {
  jsxDEV,
  Fragment,
};
