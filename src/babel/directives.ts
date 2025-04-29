import type t from '@babel/types';
import { $expressionStatement, $identifier, $jsxExpressionContainer, $jsxIdentifier } from './builders';

const cache = new WeakMap<t.JSXOpeningElement, t.ArrowFunctionExpression>();

const getRefFunction = (index: number, element: t.JSXOpeningElement): t.ArrowFunctionExpression => {
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

  if (index > -1) {
    element.attributes.splice(index, 0, refAttr);
  } else {
    element.attributes.push(refAttr);
  }

  cache.set(element, arrowFunction);

  return arrowFunction;
};

export const createDirective = (index: number, element: t.JSXOpeningElement, expression: t.Expression) => {
  const arrowFunction = getRefFunction(index, element);
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
