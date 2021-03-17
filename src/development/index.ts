import { jsx } from '../jsxRuntime';
import { Fragment } from '../Fragment';
import { specMap } from './specMap';

type Props = Record<string, unknown>;

interface IStack {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
}

const printValue = (val: unknown): string => {
  if (Array.isArray(val)) return '{ […] }';
  if (typeof val === 'object') return '{ {…} }';
  if (typeof val === 'string') return `"${val.slice(0, 100)}"`;
  if (typeof val === 'function') return '{ () => … }';

  return `{ ${val} }`;
};

const propTypes = (tagName: string, spec, props: Props, stack: IStack) => {
  for (const key in props) {
    if (key in spec) {
      const value = props[key];

      let error;

      try {
        error = spec[key](key, value);
      } catch (ex) {
        error = ex;
      }

      if (error != null) {
        console.error(
          `<${tagName} ${key}=${printValue(value)}>\n\n`,
          `${error?.message}\n\n`,
          `at [${stack.lineNumber}:${stack.columnNumber}] - ${stack.fileName}`,
        );

        break;
      }
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
