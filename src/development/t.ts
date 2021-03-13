// const has = Function.call.bind(Object.prototype.hasOwnProperty);

// const is = (x, y) => {
//   if (x === y) {
//     return x !== 0 || 1 / x === 1 / y;
//   }

//   return x !== x && y !== y;
// };

class PropTypeError extends Error {
  constructor(message) {
    super();

    this.message = message;
    this.stack = '';
  }
}

const getPropType = (propValue) => {
  if (Array.isArray(propValue)) {
    return 'array';
  }

  return typeof propValue;
};

const getPreciseType = (propValue) => {
  if (propValue == null) {
    return String(propValue);
  }

  const propType = getPropType(propValue);

  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }

  return propType;
};

const createChainableChecker = (validate) => {
  const checkType = (isRequired, props, propName) => {

    if (props[propName] == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${propName}" is required, but its value is \`${props[propName]}\``,
        );
      }

      return null;
    }

    return validate(props, propName);
  };

  const chainedCheckType = checkType.bind(null, false);

  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
};

const createPrimitiveChecker = (expectedType) => {
  return createChainableChecker((props, propName) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== expectedType) {
      const preciseType = getPreciseType(propValue);

      return new PropTypeError(
        `Invalid prop \`${propName}\` of type \`${preciseType}\`, expected \`${expectedType}\``,
      );
    }

    return null;
  });
};

export const array = createPrimitiveChecker('array');
export const bool = createPrimitiveChecker('boolean');
export const func = createPrimitiveChecker('function');
export const number = createPrimitiveChecker('number');
export const object = createPrimitiveChecker('object');
export const string = createPrimitiveChecker('string');
export const any = createChainableChecker(() => null);
