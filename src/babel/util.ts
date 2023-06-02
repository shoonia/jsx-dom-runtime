import t from '@babel/types';

const convertJSXNamespacedName = (node: t.JSXNamespacedName): t.StringLiteral => {
  return t.stringLiteral(node.namespace.name + ':' + node.name.name);
};

export const buildChildren = (node: t.JSXElement | t.JSXFragment): t.Expression[] => {
  return t.react.buildChildren(node).map((child) => {
    return t.isJSXSpreadChild(child, null) ? child.expression : child;
  });
};

export const buildProps = (node: t.JSXElement): t.ObjectExpression => {
  const props = node.openingElement.attributes.map((attr) => {
    if (t.isJSXSpreadAttribute(attr, null)) {
      return t.spreadElement(attr.argument);
    }

    const name = t.isJSXNamespacedName(attr.name, null)
      ? convertJSXNamespacedName(attr.name)
      : t.isValidIdentifier(attr.name.name, false)
        ? t.identifier(attr.name.name)
        : t.stringLiteral(attr.name.name);

    const value = t.isJSXExpressionContainer(attr.value, null)
      ? t.isJSXEmptyExpression(attr.value.expression, null)
        ? t.nullLiteral()
        : attr.value.expression
      : attr.value ?? t.booleanLiteral(true);

    if (t.isStringLiteral(value, null)) {
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
  if (t.isJSXIdentifier(node, null)) {
    if (t.isValidIdentifier(node.name, false)) {
      return t.identifier(node.name);
    }

    return t.stringLiteral(node.name);
  }

  if (t.isJSXMemberExpression(node, null)) {
    return t.memberExpression(
      convertJSXIdentifier(node.object),
      convertJSXIdentifier(node.property),
    );
  }

  return convertJSXNamespacedName(node);
};

export const getTag = (node: t.JSXElement): t.StringLiteral | t.MemberExpression => {
  const tagExpr = convertJSXIdentifier(node.openingElement.name);

  return t.isIdentifier(tagExpr, null)
    ? t.stringLiteral(tagExpr.name)
    : tagExpr;
};
