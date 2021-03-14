type TProps = Record<string, unknown>;

type TValidator = (
  key: string,
  value: unknown,
  props: TProps,
  ) => PropTypeError | null;

type TChainableChecker = (validator: TValidator) => any;

class PropTypeError extends Error {
  constructor(message: string) {
    super();

    this.message = message;
    this.stack = '';
  }
}

const getPropType = (value: unknown): string => {
  return Array.isArray(value) ? 'array' : typeof value;
};

const getPreciseType = (value: unknown): string => {
  if (value == null) {
    return String(value);
  }

  const propType = getPropType(value);

  if (propType === 'object') {
    if (value instanceof Date) {
      return 'date';
    } else if (value instanceof RegExp) {
      return 'regexp';
    }
  }

  return propType;
};

const createChainableChecker: TChainableChecker = (validater) => {
  const required = (isRequired: boolean, key, value, props): PropTypeError | null => {
    if (value == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${key}" is required, but its value is \`${value}\``,
        );
      }

      return null;
    }

    return validater(key, value, props);
  };

  const chainedCheck = required.bind(null, false);

  chainedCheck.isRequired = required.bind(null, true);

  return chainedCheck;
};

const createPrimitiveChecker = (expectedType: string) => {
  return createChainableChecker((key, value) => {
    const propType = getPropType(value);

    if (propType !== expectedType) {
      const preciseType = getPreciseType(value);

      return new PropTypeError(
        `Invalid prop \`${key}\` of type \`${preciseType}\`, expected \`${expectedType}\``,
      );
    }

    return null;
  });
};

const createOneOf = (list: string[]) => {
  return createChainableChecker((key, value) => {
    for (let i = 0; i < list.length; i++) {
      if (value === list[i]) {
        return null;
      }
    }

    return new PropTypeError(
      `Invalid prop \`${key}\` of type \`${value}\`, expected one of ${list.join(', ')}`,
    );
  });
};

export default {
  array: createPrimitiveChecker('array'),
  bool: createPrimitiveChecker('boolean'),
  func: createPrimitiveChecker('function'),
  number: createPrimitiveChecker('number'),
  object: createPrimitiveChecker('object'),
  string: createPrimitiveChecker('string'),
  any: createChainableChecker(() => null),
  oneOf: createOneOf,
} as const;
