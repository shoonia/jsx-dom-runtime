// Utility functions for ESLint rules
import type { TSESTree } from '@typescript-eslint/utils';

import { htmlTags, svgTags, mathmlTags } from '../collections';

export const isStandardElement = (tag: string) => htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag);

export const isStandardNode = (node: TSESTree.Node): node is TSESTree.JSXOpeningElement =>
  node.type === 'JSXOpeningElement' &&
  node.name.type === 'JSXIdentifier' &&
  isStandardElement(node.name.name);
