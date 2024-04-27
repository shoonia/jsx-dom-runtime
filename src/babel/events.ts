import type t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import { $identifier, $objectProperty, $stringLiteral } from './builders';

const cache = new WeakMap<t.JSXOpeningElement, t.ObjectProperty[]>();

const getObjectExpression = (element: t.JSXOpeningElement): t.ObjectProperty[] => {
  if (cache.has(element)) {
    return cache.get(element);
  }

  const properties: t.ObjectProperty[] = [];

  element.attributes.push({
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: '$',
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'ObjectExpression',
        properties,
      },
    },
  });

  cache.set(element, properties);

  return properties;
};

export const eventListener = (
  element: t.JSXOpeningElement,
  key: t.JSXIdentifier,
  value: t.Expression,
): void => {
  const properties = getObjectExpression(element);

  properties.push(
    $objectProperty(
      isIdentifierName(key.name)
        ? $identifier(key.name.toLowerCase())
        : $stringLiteral(key.name),
      value,
    ),
  );
};
