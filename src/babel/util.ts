import t from '@babel/types';

export const convertJSXIdentifier = (
  node: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
  parent: t.JSXOpeningElement | t.JSXMemberExpression,
): t.ThisExpression | t.StringLiteral | t.MemberExpression | t.Identifier => {
  if (t.isJSXIdentifier(node)) {
    if (node.name === 'this' && t.isReferenced(node, parent)) {
      return t.thisExpression();
    } else if (t.isValidIdentifier(node.name, false)) {
      // @ts-expect-error cast AST type to Identifier
      node.type = 'Identifier';
      return node as unknown as t.Identifier;
    }
    return t.stringLiteral(node.name);

  } else if (t.isJSXMemberExpression(node)) {
    return t.memberExpression(
      convertJSXIdentifier(node.object, node),
      convertJSXIdentifier(node.property, node),
    );
  } else if (t.isJSXNamespacedName(node)) {
    return t.stringLiteral(node.namespace.name + ':' + node.name.name);
  }

  // todo: this branch should be unreachable
  return node;
};
