type TProps = Record<string, unknown>;

type TValidator = (props: TProps, propName: string) => PropTypeError | null;

type TChainableChecker = (validator: TValidator) => any;

class PropTypeError extends Error {
  constructor(message: string) {
    super();

    this.message = message;
    this.stack = '';
  }
}

const getPropType = (propValue: unknown): string => {
  return Array.isArray(propValue) ? 'array' : typeof propValue;
};

const getPreciseType = (propValue: unknown): string => {
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

const createChainableChecker: TChainableChecker = (validater) => {
  const required = (isRequired: boolean, props, propName): PropTypeError | null => {
    if (props[propName] == null) {
      if (isRequired) {
        return new PropTypeError(
          `The prop "${propName}" is required, but its value is \`${props[propName]}\``,
        );
      }

      return null;
    }

    return validater(props, propName);
  };

  const chainedCheck = required.bind(null, false);

  chainedCheck.isRequired = required.bind(null, true);

  return chainedCheck;
};

const createPrimitiveChecker = (expectedType: string) => {
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
