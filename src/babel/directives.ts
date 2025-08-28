import type t from '@babel/types';
import { $expressionStatement, $identifier, $jsxExpressionContainer, $jsxIdentifier } from './builders';

interface RefProp extends t.ObjectProperty {
  key: t.Identifier & { name: 'ref' }
  value: t.Expression
}

const cache = new WeakMap<t.JSXOpeningElement, t.ArrowFunctionExpression>();

export const isRef = (i: t.ObjectMethod | t.ObjectProperty | t.SpreadElement): i is RefProp =>
  i.type === 'ObjectProperty' && i.key.type === 'Identifier' && i.key.name === 'ref';

const getRefFunction = (element: t.JSXOpeningElement): t.ArrowFunctionExpression => {
  if (cache.has(element)) {
    return cache.get(element);
  }

  const refFunction: t.ArrowFunctionExpression = {
    type: 'ArrowFunctionExpression',
    params: [$identifier('e')],
    body: { type: 'NullLiteral' },
    async: false,
    expression: false,
  };

  element.attributes.unshift({
    type: 'JSXAttribute',
    name: $jsxIdentifier('ref'),
    value: $jsxExpressionContainer(refFunction),
  });

  cache.set(element, refFunction);

  return refFunction;
};

export const createDirective = (element: t.JSXOpeningElement, expression: t.Expression) => {
  const refFunction = getRefFunction(element);
  const bodyType = refFunction.body.type;

  if (bodyType === 'NullLiteral') {
    refFunction.body = expression;
  } else if (bodyType === 'AssignmentExpression' || bodyType === 'CallExpression') {
    refFunction.body = {
      type: 'BlockStatement',
      body: [
        $expressionStatement(refFunction.body),
        $expressionStatement(expression),
      ],
      directives: [],
    };
  } else if (bodyType === 'BlockStatement') {
    refFunction.body.body.push($expressionStatement(expression));
  }
};
