'use strict';

const ANONYMOUS = '<<anonymous>>';
const has = Function.call.bind(Object.prototype.hasOwnProperty);

const empty = () => null;

const is = (x, y) => {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

const isSymbol = (propType, propValue) => {
  if (propType === 'symbol') {
    return true;
  }

  if (!propValue) {
    return false;
  }

  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;
  }

  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;
  }

  return false;
};

const getPropType = (propValue) => {
  if (Array.isArray(propValue)) {
    return 'array';
  }

  if (propValue instanceof RegExp) {
    return 'object';
  }

  const propType = typeof propValue;

  if (isSymbol(propType, propValue)) {
    return 'symbol';
  }

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

const getClassName = (propValue) => {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }

  return propValue.constructor.name;
};

function PropTypeError(message, data) {
  this.message = message;
  this.data = data && typeof data === 'object' ? data: {};
  this.stack = '';
}

PropTypeError.prototype = Error.prototype;

const createChainableTypeChecker = (validate) => {
  function checkType(isRequired, props, propName) {

    if (props[propName] == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${propName}" is marked as required, but its value is \`${props[propName]}\``,
        );
      }

      return null;
    }

    return validate(props, propName);
  }

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
        `Invalid prop "${propName}" of type \`${preciseType}\`, expected \`${expectedType}\``,
      );
    }

    return null;
  });
};

const createAnyTypeChecker = () => createChainableTypeChecker(empty);

const createArrayOfTypeChecker = (typeChecker) => {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    const propValue = props[propName];

    for (let i = 0; i < propValue.length; i++) {
      const error = typeChecker(propValue, i, componentName, location, propName + '[' + i + ']');

      if (error instanceof Error) {
        return error;
      }
    }

    return null;
  });
};

const createInstanceTypeChecker = (expectedClass) => {
  return createChainableTypeChecker((props, propName, componentName) => {
    if (!(props[propName] instanceof expectedClass)) {
      const expectedClassName = expectedClass.name || ANONYMOUS;
      const actualClassName = getClassName(props[propName]);

      return new PropTypeError('Invalid "prop" `' + propName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }

    return null;
  });
};

/**@param {any[]} listOfValues */
const createEnumTypeChecker = (listOfValues) => {
  return createChainableTypeChecker((props, propName, componentName) => {
    const propValue = props[propName];

    for (let i = 0; i < listOfValues.length; i++) {
      if (is(propValue, listOfValues[i])) {
        return null;
      }
    }

    const valuesString = JSON.stringify(listOfValues);

    return new PropTypeError('Invalid prop' + ' `' + propName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  });
};

const createObjectOfTypeChecker = (typeChecker) => {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== 'object') {
      return new PropTypeError('Invalid "prop" `' + propName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }

    for (let key in propValue) {
      if (has(propValue, key)) {
        const error = typeChecker(propValue, key, componentName, location, propName + '.' + key);

        if (error instanceof Error) {
          return error;
        }
      }
    }

    return null;
  });
};

/**@param {any[]} arrayOfTypeCheckers */
const createUnionTypeChecker = (arrayOfTypeCheckers) => {
  return createChainableTypeChecker((props, propName, componentName, location, propFullName) => {
    const expectedTypes = [];

    for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
      const checker = arrayOfTypeCheckers[i];
      const checkerResult = checker(props, propName, componentName, location, propFullName);

      if (checkerResult == null) {
        return null;
      }

      if (has(checkerResult.data, 'expectedType')) {
        expectedTypes.push(checkerResult.data.expectedType);
      }
    }
    const expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';

    return new PropTypeError('Invalid "prop" `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
  });
};

const createShapeTypeChecker = (shapeTypes) => {
  return createChainableTypeChecker((props, propName, componentName, location, propFullName) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== 'object') {
      return new PropTypeError('Invalid "prop" `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }

    for (let key in shapeTypes) {
      const checker = shapeTypes[key];
      const error = checker(propValue, key, componentName, location, propFullName + '.' + key);

      if (error) {
        return error;
      }
    }

    return null;
  });
};

const createStrictShapeTypeChecker = (shapeTypes) => {
  return createChainableTypeChecker((props, propName, componentName, location, propFullName) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== 'object') {
      return new PropTypeError('Invalid "prop" `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }

    const allKeys = Object.assign({}, props[propName], shapeTypes);

    for (let key in allKeys) {
      const checker = shapeTypes[key];

      if (!checker) {
        return new PropTypeError(
          'Invalid "prop" `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
             '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
             '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
        );
      }

      const error = checker(propValue, key, componentName, location, propFullName + '.' + key);

      if (error) {
        return error;
      }
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

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  instanceOf: createInstanceTypeChecker,
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker,
  exact: createStrictShapeTypeChecker,
};
