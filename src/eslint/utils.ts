// Utility functions for ESLint rules
import type { TSESTree } from '@typescript-eslint/utils';
import { htmlTags, svgTags, mathmlTags } from '../tags';

export const isJSXIdentifier = (node: TSESTree.Node): node is TSESTree.JSXIdentifier => node.type === 'JSXIdentifier';
export const isJSXOpeningElement = (node: TSESTree.Node): node is TSESTree.JSXOpeningElement => node.type === 'JSXOpeningElement';

export const isStandardElement = (tag: string) => htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag);
