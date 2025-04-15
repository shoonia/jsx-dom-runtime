import type t from '@babel/types';

export const $stringLiteral = (value: string): t.StringLiteral => ({
  type: 'StringLiteral',
  value,
});

export const $identifier = (name: string): t.Identifier => ({
  type: 'Identifier',
  name,
});

export const $objectProperty = (key: t.Identifier | t.StringLiteral, value: t.Expression): t.ObjectProperty => ({
  type: 'ObjectProperty',
  key,
  value,
  computed: false,
  shorthand: false,
  decorators: null,
});

export const $children = (elements: (t.JSXSpreadChild | t.Expression)[]) =>
  elements.length === 1
    ? elements[0] as t.Expression
    : {
      type: 'ArrayExpression',
      elements,
    } as t.Expression;

export const $pureAnnotation = (): [t.CommentBlock] => [
  {
    type: 'CommentBlock',
    value: '#__PURE__',
  },
];
