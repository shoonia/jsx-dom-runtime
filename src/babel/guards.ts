import t from '@babel/types';

type NodeType = t.Node['type'];

const literals = new Set<NodeType>([
  'StringLiteral',
  'TemplateLiteral',
  'NumericLiteral',
  'BooleanLiteral',
  'BigIntLiteral',
  'NullLiteral',
]);

export const isChildren = (node: t.Node): node is t.ObjectProperty =>
  node.type === 'ObjectProperty' && node.key.type === 'Identifier' && node.key.name === 'children';

interface RefProp extends t.ObjectProperty {
  key: t.Identifier & { name: 'ref' }
  value: t.Expression
}

export const isRef = (i: t.ObjectMethod | t.ObjectProperty | t.SpreadElement): i is RefProp =>
  i.type === 'ObjectProperty' && i.key.type === 'Identifier' && i.key.name === 'ref';

export const isJsxContainerWithBoolean = (node: t.Node): node is t.JSXExpressionContainer =>
  node.type === 'JSXExpressionContainer' && node.expression.type === 'BooleanLiteral';

export const isJsxAttributeLiteralValue = (node: t.Node | null): node is t.JSXExpressionContainer =>
  node == null ||
  node.type === 'StringLiteral' ||
  node.type === 'JSXExpressionContainer' && literals.has(node.expression.type);

// [$] and [_] character codes
const charCode = new Set([36, 95]);
// [A-Z] character codes
for (let i = 65; i <= 90; i++) charCode.add(i);

export const isFunctionComponent = (name: t.JSXIdentifier): boolean =>
  charCode.has(name.name.charCodeAt(0));
