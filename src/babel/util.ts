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

    const value: t.Expression = attr.value === null
      ? { type: 'BooleanLiteral', value: true }
      : attr.value.type === 'JSXExpressionContainer'
        ? attr.value.expression.type === 'JSXEmptyExpression'
          ? { type: 'NullLiteral' }
          : attr.value.expression
        : attr.value;

    if (value.type === 'StringLiteral') {
      value.value = value.value.replace(/\n\s+/g, ' ');
    }

    return $objectProperty(
      attr.name.type === 'JSXNamespacedName'
        ? convertJSXNamespacedName(attr.name)
        : isIdentifierName(attr.name.name)
          ? $identifier(attr.name.name)
          : $stringLiteral(attr.name.name),
      value,
    );
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
    return $identifier(node.name);
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
