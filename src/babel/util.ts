import t from '@babel/types';

const toIdentifier = (node: t.JSXIdentifier): t.Identifier => {
  // @ts-expect-error cast AST type to Identifier
  node.type = 'Identifier';

  return node as unknown as t.Identifier;
};

export const buildChildren = (node: t.JSXElement | t.JSXFragment): t.Expression[] => {
  return t.react.buildChildren(node).map((child) => {
    return t.isJSXSpreadChild(child) ? child.expression : child;
  });
};

export const buildProps = (node: t.JSXElement): t.ObjectExpression => {
  const props = node.openingElement.attributes.map((attr) => {
    if (t.isJSXSpreadAttribute(attr)) {
      return t.spreadElement(attr.argument);
    }

    const name = t.isJSXNamespacedName(attr.name)
      ? t.stringLiteral(attr.name.namespace.name + ':' + attr.name.name.name)
      : t.isValidIdentifier(attr.name.name, false)
        ? toIdentifier(attr.name)
        : t.stringLiteral(attr.name.name);

    const value = t.isJSXExpressionContainer(attr.value)
      ? t.isJSXEmptyExpression(attr.value.expression)
        ? t.nullLiteral()
        : attr.value.expression
      : attr.value || t.booleanLiteral(true);

    if (t.isStringLiteral(value)) {
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
  if (t.isJSXIdentifier(node)) {
    if (t.isValidIdentifier(node.name, false)) {
      return toIdentifier(node);
    }

    return t.stringLiteral(node.name);
  } else if (t.isJSXMemberExpression(node)) {
    return t.memberExpression(
      convertJSXIdentifier(node.object),
      convertJSXIdentifier(node.property),
    );
  } else if (t.isJSXNamespacedName(node)) {
    return t.stringLiteral(node.namespace.name + ':' + node.name.name);
  }

  return node;
};

export const getTag = (node: t.JSXElement) => {
  const tagExpr = convertJSXIdentifier(node.openingElement.name);

  const tagName = t.isIdentifier(tagExpr)
    ? tagExpr.name
    : t.isStringLiteral(tagExpr)
      ? tagExpr.value
      : undefined;

  if (t.react.isCompatTag(tagName)) {
    return t.stringLiteral(tagName);
  }

  return tagExpr;
};
