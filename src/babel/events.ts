import type t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import type { DirectiveFunc } from './util';
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

export const eventListener: DirectiveFunc = (element, attrName, attrValue) => {
  if (attrValue?.type !== 'JSXExpressionContainer') {
    return;
  }

  const properties = getObjectProperties(element);
  const name = attrName.toLowerCase();

  properties.push(
    $objectProperty(
      eventTypes.has(name)
        ? $identifier(name)
        : isIdentifierName(attrName)
          ? $identifier(attrName)
          : $stringLiteral(attrName),
      attrValue.expression as t.Expression,
    ),
  );
};
