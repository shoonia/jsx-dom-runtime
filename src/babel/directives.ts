import type * as t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import {
  $expressionStatement,
  $identifier,
  $jsxExpressionContainer,
  $jsxIdentifier,
  $stringLiteral,
  $arrowFunction,
} from './builders';
import { convertJsxAttrValue } from './util';

const cache = new WeakMap<t.JSXOpeningElement, t.ArrowFunctionExpression>();
const e = Object.seal($identifier('e'));

const getRef = (element: t.JSXOpeningElement): t.ArrowFunctionExpression => {
  if (cache.has(element)) {
    return cache.get(element)!;
  }

  const arrowFn = $arrowFunction(e, null as any);

  element.attributes.unshift({
    type: 'JSXAttribute',
    name: $jsxIdentifier('ref'),
    value: $jsxExpressionContainer(arrowFn),
  });

  cache.set(element, arrowFn);

  return arrowFn;
};

export const createDirective = (element: t.JSXOpeningElement, expression: t.Expression): void => {
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

export const setAttributeCallExp = (attrName: string, param: t.Expression): t.CallExpression => ({
  type: 'CallExpression',
  callee: {
    type: 'MemberExpression',
    object: e,
    property: $identifier('setAttribute'),
    computed: false,
  },
  arguments: [
    $stringLiteral(attrName),
    param,
  ],
});

export const propAssignmentExp = (attrName: string, param: t.Expression): t.AssignmentExpression => {
  const isIdent = isIdentifierName(attrName);

  return {
    type: 'AssignmentExpression',
    operator: '=',
    left: {
      type: 'MemberExpression',
      object: e,
      property: isIdent ? $identifier(attrName) : $stringLiteral(attrName),
      computed: !isIdent,
    } as t.MemberExpression,
    right: param,
  };
};

export const setUtility = (openingElement: t.JSXOpeningElement, attrValue: t.JSXAttribute['value'], callee: t.Identifier) =>
  createDirective(openingElement, {
    type: 'CallExpression',
    callee,
    arguments: [
      e,
      convertJsxAttrValue(attrValue),
    ],
  });

export const setSignalishProp = (
  openingElement: t.JSXOpeningElement,
  callee: t.Identifier,
  attrName: string,
  attrValue: t.Expression,
) => {
  const param = $identifier('i');

  return createDirective(openingElement, {
    type: 'CallExpression',
    callee,
    arguments: [
      attrValue,
      $arrowFunction(param, propAssignmentExp(attrName, param)),
    ],
  });
};

export const setSignalishAttr = (
  openingElement: t.JSXOpeningElement,
  callee: t.Identifier,
  attrName: string,
  attrValue: t.Expression,
) => {
  const param = $identifier('i');

  return createDirective(openingElement, {
    type: 'CallExpression',
    callee,
    arguments: [
      attrValue,
      $arrowFunction(param, setAttributeCallExp(attrName, param)),
    ],
  });
};
