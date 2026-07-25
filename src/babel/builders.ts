import type t from '@babel/types';

export const $stringLiteral = (value: string): t.StringLiteral => ({
  type: 'StringLiteral',
  value,
});

export const $identifier = (name: string): t.Identifier => ({
  type: 'Identifier',
  name,
});

export const $jsxIdentifier = (name: string): t.JSXIdentifier => ({
  type: 'JSXIdentifier',
  name,
});

export const $jsxExpressionContainer = (expression: t.Expression | t.JSXEmptyExpression): t.JSXExpressionContainer => ({
  type: 'JSXExpressionContainer',
  expression,
});

export const $objectProperty = (key: t.Identifier | t.StringLiteral, value: t.Expression): t.ObjectProperty => ({
  type: 'ObjectProperty',
  key,
  value,
  computed: false,
  shorthand: false,
  decorators: null,
});

const flattenArray = (elements: t.Expression[]): t.Expression[] => {
  const output: t.Expression[] = [];

  for (const element of elements) {
    if (element.type === 'ArrayExpression') {
      output.push(...flattenArray(element.elements));
    } else {
      output.push(element);
    }
  }

  return output;
};

export const $children = (items: (t.JSXSpreadChild | t.Expression)[]) => {
  const elements = flattenArray(items);

  return elements.length === 1
    ? elements[0] as t.Expression
    : {
      type: 'ArrayExpression',
      elements,
    } as t.Expression;
};

export const $pureAnnotation = (): [t.CommentBlock] => [
  {
    type: 'CommentBlock',
    value: '#__PURE__',
  },
];

export const $expressionStatement = (expression: t.Expression): t.ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression,
});
