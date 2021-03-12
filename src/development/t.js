'use strict';

const ANONYMOUS = '<<anonymous>>';
const has = Function.call.bind(Object.prototype.hasOwnProperty);

const printWarning = (text) => {
  const message = 'Warning: ' + text;

  console?.error(message);

  try {
    throw new Error(message);
  } catch (x) { /**/ }
};

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

const getPostfixForTypeWarning = (value) => {
  const type = getPreciseType(value);

  switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
  }
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
  function checkType(isRequired, props, propName, _, location) {

    if (props[propName] == null) {
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError('The ' + location + ' `' + propName + '` is marked as required, but its value is `null`.');
        }
        return new PropTypeError('The ' + location + ' `' + propName + '` is marked as required, but its value is `undefined`.');
      }
      return null;
    }

    return validate(props, propName, _, location);
  }

  const chainedCheckType = checkType.bind(null, false);

  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
};

const createPrimitiveTypeChecker = (expectedType) => {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== expectedType) {
      const preciseType = getPreciseType(propValue);

      return new PropTypeError(
        'Invalid ' + location + ' `' + propName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
        { expectedType }
      );
    }

    return null;
  });
};

const createAnyTypeChecker = () => {
  return createChainableTypeChecker(empty);
};

function createArrayOfTypeChecker(typeChecker) {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
    }

    const propValue = props[propName];

    if (!Array.isArray(propValue)) {
      const propType = getPropType(propValue);

      return new PropTypeError('Invalid ' + location + ' `' + propName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }

    for (let i = 0; i < propValue.length; i++) {
      const error = typeChecker(propValue, i, componentName, location, propName + '[' + i + ']');

      if (error instanceof Error) {
        return error;
      }
    }

    return null;
  });
}

const createInstanceTypeChecker = (expectedClass) => {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    if (!(props[propName] instanceof expectedClass)) {
      const expectedClassName = expectedClass.name || ANONYMOUS;
      const actualClassName = getClassName(props[propName]);

      return new PropTypeError('Invalid ' + location + ' `' + propName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }

    return null;
  });
};

function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    if (arguments.length > 1) {
      printWarning(
        'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
             'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
      );
    } else {
      printWarning('Invalid argument supplied to oneOf, expected an array.');
    }

    return empty;
  }

  return createChainableTypeChecker((props, propName, componentName, location) => {
    const propValue = props[propName];

    for (let i = 0; i < expectedValues.length; i++) {
      if (is(propValue, expectedValues[i])) {
        return null;
      }
    }

    const valuesString = JSON.stringify(expectedValues, (_, value) => {
      const type = getPreciseType(value);

      if (type === 'symbol') {
        return String(value);
      }

      return value;
    });

    return new PropTypeError('Invalid ' + location + ' `' + propName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  });
}

function createObjectOfTypeChecker(typeChecker) {
  return createChainableTypeChecker((props, propName, componentName, location) => {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
    }

    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== 'object') {
      return new PropTypeError('Invalid ' + location + ' `' + propName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
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
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');

    return empty;
  }

  for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
    const checker = arrayOfTypeCheckers[i];

    if (typeof checker !== 'function') {
      printWarning(
        'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
           'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
      );

      return empty;
    }
  }

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

    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
  });
}

const invalidValidatorError = (componentName, location, propFullName, key, type) => {
  return new PropTypeError(
    (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
       'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
  );
};

const createShapeTypeChecker = (shapeTypes) => {
  return createChainableTypeChecker((props, propName, componentName, location, propFullName) => {
    const propValue = props[propName];
    const propType = getPropType(propValue);

    if (propType !== 'object') {
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }

    for (let key in shapeTypes) {
      const checker = shapeTypes[key];

      if (typeof checker !== 'function') {
        return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
      }

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
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }

    const allKeys = Object.assign({}, props[propName], shapeTypes);

    for (let key in allKeys) {
      const checker = shapeTypes[key];

      if (has(shapeTypes, key) && typeof checker !== 'function') {
        return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
      }

      if (!checker) {
        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
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
