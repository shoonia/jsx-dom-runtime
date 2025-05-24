import type { TSESTree } from '@typescript-eslint/utils';

import { htmlTags, svgTags, mathmlTags } from '../collections';

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

export const isStandardElement = (tag: string) => htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag);

export const isJSXIdentifier = (node: TSESTree.Node): node is TSESTree.JSXIdentifier =>
  node.type === 'JSXIdentifier';

export const isStandardNode = (node: TSESTree.Node): node is TSESTree.JSXOpeningElement =>
  node.type === 'JSXOpeningElement' &&
  isJSXIdentifier(node.name) &&
  isStandardElement(node.name.name);

export const isVoidElement = (node: TSESTree.JSXOpeningElement): node is TSESTree.JSXOpeningElement =>
  isJSXIdentifier(node.name) &&
  voidElements.has(node.name.name);

export const hasJSXChildren = (node: TSESTree.JSXElement): boolean =>
  Array.isArray(node.children) && node.children.length > 0;
