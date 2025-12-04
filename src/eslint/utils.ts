import type { TSESTree } from '@typescript-eslint/utils';

import { htmlTags, svgTags, mathmlTags, voidHTMLTags } from '../collections';

const voidTags = new Set(voidHTMLTags);

const isStandardTag = (tag: string) => htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag);

export const isJSXIdentifier = (node: TSESTree.Node): node is TSESTree.JSXIdentifier =>
  node.type === 'JSXIdentifier';

export const isStandardNode = (node: TSESTree.JSXOpeningElement): boolean =>
  isJSXIdentifier(node.name) &&
  isStandardTag(node.name.name);

export const isSvgNode = (node: TSESTree.JSXOpeningElement): boolean =>
  isJSXIdentifier(node.name) &&
  (svgTags.has(node.name.name) || node.name.name === 'a');

export const isVoidElement = (node: TSESTree.JSXOpeningElement): boolean =>
  isJSXIdentifier(node.name) &&
  voidTags.has(node.name.name);

export const hasJSXChildren = (node: TSESTree.JSXElement): boolean =>
  Array.isArray(node.children) && node.children.length > 0;
