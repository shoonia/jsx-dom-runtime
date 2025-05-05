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

  const arrowFunction: t.ArrowFunctionExpression = {
    type: 'ArrowFunctionExpression',
    params: [$identifier('e')],
    body: { type: 'NullLiteral' },
    async: false,
    expression: false,
  };

  const refAttr: t.JSXAttribute = {
    type: 'JSXAttribute',
    name: $jsxIdentifier('ref'),
    value: $jsxExpressionContainer(arrowFunction),
  };

  element.attributes.unshift(refAttr);
  cache.set(element, arrowFunction);

  return arrowFunction;
};

export const createDirective = (element: t.JSXOpeningElement, expression: t.Expression) => {
  const arrowFunction = getRefFunction(element);
  const bodyType = arrowFunction.body.type;

  if (bodyType === 'NullLiteral') {
    arrowFunction.body = expression;
  }
  else if (bodyType === 'AssignmentExpression' || bodyType === 'CallExpression') {
    arrowFunction.body = {
      type: 'BlockStatement',
      body: [
        $expressionStatement(arrowFunction.body),
        $expressionStatement(expression),
      ],
      directives: [],
    };
  }
  else if (bodyType === 'BlockStatement') {
    arrowFunction.body.body.push($expressionStatement(expression));
  }
};
