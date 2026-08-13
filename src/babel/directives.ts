import type t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import { $expressionStatement, $identifier, $jsxExpressionContainer, $jsxIdentifier, $stringLiteral } from './builders';
import { convertJSXAttrValue, type DirectiveFunc } from './util';

const cache = new WeakMap<t.JSXOpeningElement, t.ArrowFunctionExpression>();
const e = Object.seal($identifier('e'));

const getRef = (element: t.JSXOpeningElement): t.ArrowFunctionExpression => {
  if (cache.has(element)) {
    return cache.get(element);
  }

  const funcRef: t.ArrowFunctionExpression = {
    type: 'ArrowFunctionExpression',
    params: [e],
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

const createDirective = (element: t.JSXOpeningElement, expression: t.Expression) => {
  const funcRef = getRef(element);

  if (funcRef.body === null) {
    funcRef.body = expression;
    return;
  }

  if (funcRef.body.type !== 'BlockStatement') {
    funcRef.body = {
      type: 'BlockStatement',
      body: [
        $expressionStatement(funcRef.body),
        $expressionStatement(expression),
      ],
      directives: [],
    };
    return;
  }

  funcRef.body.body.push($expressionStatement(expression));
};

export const createDirectiveCallExp: DirectiveFunc = (openingElement, attrName, attrValue) =>
  createDirective(openingElement, {
    type: 'CallExpression',
    callee: {
      type: 'MemberExpression',
      object: e,
      property: $identifier('setAttribute'),
      computed: false,
    },
    arguments: [
      $stringLiteral(attrName),
      convertJSXAttrValue(attrValue)
    ],
  });

export const createDirectiveAssignExp: DirectiveFunc = (openingElement, attrName, attrValue) => {
  const isIdent = isIdentifierName(attrName);

  createDirective(openingElement, {
    type: 'AssignmentExpression',
    operator: '=',
    left: {
      type: 'MemberExpression',
      object: e,
      property: isIdent ? $identifier(attrName) : $stringLiteral(attrName),
      computed: !isIdent,
    },
    right: convertJSXAttrValue(attrValue)
  });
};

export const setUtility = (openingElement: t.JSXOpeningElement, attrValue: t.JSXAttribute['value'], callee: t.Identifier) =>
  createDirective(openingElement, {
    type: 'CallExpression',
    callee,
    arguments: [
      e,
      convertJSXAttrValue(attrValue)
    ],
  });

export const setProperty = (
  openingElement: t.JSXOpeningElement,
  attrName: string,
  attrValue: t.JSXAttribute['value'],
  callee: t.Identifier,
) => {
  const isIdent = isIdentifierName(attrName);
  const param = $identifier('i');

  return createDirective(openingElement, {
    type: 'CallExpression',
    callee,
    arguments: [
      attrValue,
      {
        type: 'ArrowFunctionExpression',
        async: false,
        expression: false,
        params: [param],
        body: {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'MemberExpression',
            object: e,
            property: isIdent ? $identifier(attrName) : $stringLiteral(attrName),
            computed: !isIdent,
          },
          right: param
        }
      }
    ]
  });
};
