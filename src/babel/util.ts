import t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import { $stringLiteral, $identifier, $objectProperty, $children } from './builders';

const convertJSXNamespacedName = (node: t.JSXNamespacedName): t.StringLiteral => {
  return $stringLiteral(node.namespace.name + ':' + node.name.name);
};

export const buildChildren = (node: t.JSXElement | t.JSXFragment): t.Expression[] => {
  return t.react.buildChildren(node).map((child) => {
    return child.type === 'JSXSpreadChild' ? child.expression : child;
  });
};

export const buildProps = (node: t.JSXElement): t.ObjectExpression => {
  const props = node.openingElement.attributes.map((attr) => {
    if (attr.type === 'JSXSpreadAttribute') {
      return {
        type: 'SpreadElement',
        argument: attr.argument,
      } satisfies t.SpreadElement;
    }

    const key = attr.name.type === 'JSXNamespacedName'
      ? convertJSXNamespacedName(attr.name)
      : isIdentifierName(attr.name.name)
        ? $identifier(attr.name.name)
        : $stringLiteral(attr.name.name);

    const value = attr.value === null
      ? { type: 'BooleanLiteral', value: true } satisfies t.BooleanLiteral
      : attr.value.type === 'JSXExpressionContainer'
        ? attr.value.expression.type === 'JSXEmptyExpression'
          ? { type: 'NullLiteral' } satisfies t.NullLiteral
          : attr.value.expression
        : attr.value;

    if (value.type === 'StringLiteral') {
      value.value = value.value.replace(/\n\s+/g, ' ');
    }

    return $objectProperty(key, value);
  });

  const children = buildChildren(node);

  if (children.length > 0) {
    props.push(
      $objectProperty(
        $identifier('children'),
        $children(children),
      ),
    );
  }

  return {
    type: 'ObjectExpression',
    properties: props,
  };
};

export const convertJSXIdentifier = (
  node: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
): t.StringLiteral | t.MemberExpression | t.Identifier => {
  if (node.type === 'JSXIdentifier') {
    if (isIdentifierName(node.name)) {
      return $identifier(node.name);
    }

    return $stringLiteral(node.name);
  }

  if (node.type === 'JSXMemberExpression') {
    return {
      type: 'MemberExpression',
      object: convertJSXIdentifier(node.object),
      property: convertJSXIdentifier(node.property),
      computed: false,
      optional: null,
    };
  }

  return convertJSXNamespacedName(node);
};

export const getTag = (node: t.JSXElement): t.StringLiteral | t.MemberExpression => {
  const tagExp = convertJSXIdentifier(node.openingElement.name);

  return tagExp.type === 'Identifier'
    ? $stringLiteral(tagExp.name)
    : tagExp;
};
