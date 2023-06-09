import t from '@babel/types';
import { isIdentifierName } from '@babel/helper-validator-identifier';

import { $stringLiteral, $identifier, $objectProperty, $children } from './builders';

const convertJSXNamespacedName = (node: t.JSXNamespacedName): t.StringLiteral => {
  return $stringLiteral(node.namespace.name + ':' + node.name.name);
};

export const buildProps = (node: t.JSXElement): t.ObjectExpression => {
  const properties = node.openingElement.attributes.map((attr) => {
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

  const children = t.react.buildChildren(node);

  if (children.length > 0) {
    properties.push(
      $objectProperty(
        $identifier('children'),
        $children(children),
      ),
    );
  }

  return {
    type: 'ObjectExpression',
    properties,
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
