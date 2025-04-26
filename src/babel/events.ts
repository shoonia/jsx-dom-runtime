import type t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import { $identifier, $jsxExpressionContainer, $jsxIdentifier, $objectProperty, $stringLiteral } from './builders';
import { eventTypes } from './collections';

const cache = new WeakMap<t.JSXOpeningElement, t.ObjectProperty[]>();

const getObjectProperties = (element: t.JSXOpeningElement): t.ObjectProperty[] => {
  if (cache.has(element)) {
    return cache.get(element);
  }

  const properties: t.ObjectProperty[] = [];

  element.attributes.push({
    type: 'JSXAttribute',
    name: $jsxIdentifier('$'),
    value: $jsxExpressionContainer({
      type: 'ObjectExpression',
      properties,
    }),
  });

  cache.set(element, properties);

  return properties;
};

export const eventListener = (
  element: t.JSXOpeningElement,
  key: t.JSXIdentifier,
  value: t.JSXExpressionContainer,
): void => {
  const properties = getObjectProperties(element);
  const name = key.name.toLowerCase();

  properties.push(
    $objectProperty(
      eventTypes.has(name)
        ? $identifier(name)
        : isIdentifierName(key.name)
          ? $identifier(key.name)
          : $stringLiteral(key.name),
      value.expression as t.Expression,
    ),
  );
};
