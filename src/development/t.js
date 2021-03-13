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

  if (propValue instanceof RegExp) {
    return 'object';
  }

  const propType = typeof propValue;

  return propType;
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

const createChainableTypeChecker = (validate) => {
  const checkType = (isRequired, props, propName) => {

    if (props[propName] == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${propName}" is marked as required, but its value is \`${props[propName]}\``,
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

const createPrimitiveTypeChecker = (expectedType) => {
  return createChainableTypeChecker((props, propName) => {
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

export default {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
  any: createChainableTypeChecker(() => null),
};
