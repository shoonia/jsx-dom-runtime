import type * as t from '@babel/types';

type Nulishable<T> = T | null | undefined;
type NodeType = Nulishable<t.Node['type']>;

interface RefProp extends t.ObjectPropertyNonComputed {
  key: t.Identifier & { name: 'ref' }
  value: t.Expression
}

interface JsxExpdressionContainerWithBoolean extends t.JSXExpressionContainer {
  expression: t.BooleanLiteral
}

export const staticTypes = new Set<NodeType>([
  'StringLiteral',
  'TemplateLiteral',
  'NumericLiteral',
  'BooleanLiteral',
  'BigIntLiteral',
  'NullLiteral',
  'BinaryExpression'
]);

export const jsxNode = new Set<NodeType>(['JSXElement', 'JSXFragment']);

export const isChildren = (node: t.Node): node is t.ObjectProperty =>
  node.type === 'ObjectProperty' && node.key.type === 'Identifier' && node.key.name === 'children';

export const isRef = (i: t.ObjectMethod | t.ObjectProperty | t.SpreadElement): i is RefProp =>
  i.type === 'ObjectProperty' && i.key.type === 'Identifier' && i.key.name === 'ref';

export const isJsxContainerWithBoolean = (node: t.Node): node is JsxExpdressionContainerWithBoolean =>
  node.type === 'JSXExpressionContainer' && node.expression.type === 'BooleanLiteral';

export const isStaticJsxAttributeValue = (node: Nulishable<t.Node>): node is Nulishable<t.JSXExpressionContainer> =>
  node == null ||
  node.type === 'StringLiteral' ||
  node.type === 'JSXExpressionContainer' && staticTypes.has(node.expression.type);

// [$] and [_] character codes
const charCode = new Set([36, 95]);
// [A-Z] character codes
for (let i = 65; i <= 90; i++) charCode.add(i);

export const isFunctionComponent = (name: t.JSXIdentifier): boolean =>
  charCode.has(name.name.charCodeAt(0));

// [:] and [-] character codes
const cp = new Set([58, 45]);
export const isIdentifierName = (name: string): boolean => {
  for (let i = 0; i < name.length; i++) {
    if (cp.has(name.charCodeAt(i))) {
      return false;
    }
  }
  return true;
};
