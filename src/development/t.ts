type TValidator = (key: string, value: unknown) => PropTypeError | null;

type TChainableChecker = (validator: TValidator) => any;

class PropTypeError extends Error {
  public expected: string[];

  constructor(message: string, expected = []) {
    super();

    this.message = message;
    this.stack = '';
    this.expected = expected;
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
  const required = (isRequired: boolean, key, value): PropTypeError | null => {
    if (value == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${key}" is required, but its value is \`${value}\``,
        );
      }

      return null;
    }

    return validater(key, value);
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
        [`\`${expectedType}\``],
      );
    }

    return null;
  });
};

const booleanishChecker = createChainableChecker((key, value) => {
  if (typeof value === 'boolean' || value === 'true' || value === 'false') {
    return null;
  }

  const preciseType = getPreciseType(value);

  return new PropTypeError(
    `Invalid prop \`${key}\` of type \`${preciseType}\`, expected "true", "false" or \`boolean\``,
    ['`boolean`', 'true', 'false'],
  );
});

const createOneOf = <T extends string>(list: T[]) => {
  return createChainableChecker((key, value) => {
    for (let i = 0; i < list.length; i++) {
      if (value === list[i]) {
        return null;
      }
    }

    const preciseType = String(value).slice(0, 100);

    return new PropTypeError(
      `Invalid prop \`${key}\` of type "${preciseType}", expected one of "${list.join('", "')}"`,
      list,
    );
  });
};

const createOneOfType = (validators: TValidator[]) => {
  return createChainableChecker((key, value) => {
    const expected = [];

    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](key, value);

      if (result === null) {
        return null;
      }

      expected.push(...result.expected);
    }

    const preciseType = getPreciseType(value);

    return new PropTypeError(
      `Invalid prop \`${key}\` of type \`${preciseType}\`, expected one of ${expected.join(', ')}`,
      expected,
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
  booleanish: booleanishChecker,
  oneOf: createOneOf,
  oneOfType: createOneOfType,
} as const;
