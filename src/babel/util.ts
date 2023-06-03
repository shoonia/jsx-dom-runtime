import t from '@babel/types';

const convertJSXNamespacedName = (node: t.JSXNamespacedName): t.StringLiteral => {
  return t.stringLiteral(node.namespace.name + ':' + node.name.name);
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

    const name = attr.name.type === 'JSXNamespacedName'
      ? convertJSXNamespacedName(attr.name)
      : t.isValidIdentifier(attr.name.name, false)
        ? t.identifier(attr.name.name)
        : t.stringLiteral(attr.name.name);

    const value = t.isJSXExpressionContainer(attr.value, null)
      ? attr.value.expression.type === 'JSXEmptyExpression'
        ? t.nullLiteral()
        : attr.value.expression
      : attr.value ?? t.booleanLiteral(true);

    if (value.type === 'StringLiteral') {
      value.value = value.value.replace(/\n\s+/g, ' ');
    }

    return t.objectProperty(name, value);
  });

  const children = buildChildren(node);

  if (children.length > 0) {
    props.push(
      t.objectProperty(
        t.identifier('children'),
        children.length === 1
          ? children[0]
          : t.arrayExpression(children),
      ),
    );
  }

  return t.objectExpression(props);
};

export const convertJSXIdentifier = (
  node: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
): t.StringLiteral | t.MemberExpression | t.Identifier => {
  if (node.type === 'JSXIdentifier') {
    if (t.isValidIdentifier(node.name, false)) {
      return t.identifier(node.name);
    }

    return t.stringLiteral(node.name);
  }

  if (node.type === 'JSXMemberExpression') {
    return t.memberExpression(
      convertJSXIdentifier(node.object),
      convertJSXIdentifier(node.property),
    );
  }

  return convertJSXNamespacedName(node);
};

export const getTag = (node: t.JSXElement): t.StringLiteral | t.MemberExpression => {
  const tagExp = convertJSXIdentifier(node.openingElement.name);

  return tagExp.type === 'Identifier'
    ? t.stringLiteral(tagExp.name)
    : tagExp;
};
