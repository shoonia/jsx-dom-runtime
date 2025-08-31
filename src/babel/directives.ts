import type t from '@babel/types';
import { $expressionStatement, $identifier, $jsxExpressionContainer, $jsxIdentifier } from './builders';

interface RefProp extends t.ObjectProperty {
  key: t.Identifier & { name: 'ref' }
  value: t.Expression
}

const cache = new WeakMap<t.JSXOpeningElement, t.ArrowFunctionExpression>();

export const isRef = (i: t.ObjectMethod | t.ObjectProperty | t.SpreadElement): i is RefProp =>
  i.type === 'ObjectProperty' && i.key.type === 'Identifier' && i.key.name === 'ref';

const getRef = (element: t.JSXOpeningElement): t.ArrowFunctionExpression => {
  if (cache.has(element)) {
    return cache.get(element);
  }

  const funcRef: t.ArrowFunctionExpression = {
    type: 'ArrowFunctionExpression',
    params: [$identifier('e')],
    body: null,
    async: false,
    expression: false,
  };

  element.attributes.unshift({
    type: 'JSXAttribute',
    name: $jsxIdentifier('ref'),
    value: $jsxExpressionContainer(funcRef),
  });

  cache.set(element, funcRef);

  return funcRef;
};

export const createDirective = (element: t.JSXOpeningElement, expression: t.Expression) => {
  const funcRef = getRef(element);

  if (funcRef.body === null) {
    funcRef.body = expression;
    return;
  }

  const bodyType = funcRef.body.type;

  if (bodyType === 'AssignmentExpression' || bodyType === 'CallExpression') {
    funcRef.body = {
      type: 'BlockStatement',
      body: [
        $expressionStatement(funcRef.body),
        $expressionStatement(expression),
      ],
      directives: [],
    };
  } else if (bodyType === 'BlockStatement') {
    funcRef.body.body.push($expressionStatement(expression));
  }
};
