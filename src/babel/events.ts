import type t from '@babel/types';

import { $identifier, $objectProperty } from './builders';

const cache = new WeakMap<t.JSXOpeningElement, t.ObjectProperty[]>();

const getObjectExpression = (parent: t.JSXOpeningElement): t.ObjectProperty[] => {
  if (cache.has(parent)) {
    return cache.get(parent);
  }

  const properties: t.ObjectProperty[] = [];

  parent.attributes.push({
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

  cache.set(parent, properties);

  return properties;
};

export const addEventListener = (
  parent: t.JSXOpeningElement,
  key: t.JSXIdentifier,
  value: t.Expression,
): void => {
  const properties = getObjectExpression(parent);

  properties.push(
    $objectProperty($identifier(key.name.toLowerCase()), value),
  );
};
