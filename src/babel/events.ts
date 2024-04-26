import type t from '@babel/types';

import { $identifier, $objectProperty } from './builders';

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
      $identifier(key.name.toLowerCase()),
      value,
    ),
  );
};
