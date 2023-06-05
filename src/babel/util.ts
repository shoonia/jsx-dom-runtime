import t from '@babel/types';

import { $stringLiteral, $identifier } from './builders';

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
      return t.spreadElement(attr.argument);
    }

    const key = attr.name.type === 'JSXNamespacedName'
      ? convertJSXNamespacedName(attr.name)
      : t.isValidIdentifier(attr.name.name, false)
        ? $identifier(attr.name.name)
        : $stringLiteral(attr.name.name);

    const value = t.isJSXExpressionContainer(attr.value, null)
      ? attr.value.expression.type === 'JSXEmptyExpression'
        ? t.nullLiteral()
        : attr.value.expression
      : attr.value ?? t.booleanLiteral(true);

    if (value.type === 'StringLiteral') {
      value.value = value.value.replace(/\n\s+/g, ' ');
    }

    return t.objectProperty(key, value);
  });

  const children = buildChildren(node);

  if (children.length > 0) {
    props.push(
      t.objectProperty(
        $identifier('children'),
        children.length === 1
          ? children[0]
          : t.arrayExpression(children),
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
    if (t.isValidIdentifier(node.name, false)) {
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
