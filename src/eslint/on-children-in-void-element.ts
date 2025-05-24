import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { hasJSXChildren, isVoidElement } from './utils';

export const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.',
      category: 'SyntaxError',
      recommended: true,
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Void_element',
    },
    fixable: 'code',
    schema: [],
    messages: {
      noChildren: 'Void elements cannot have children or a children attribute. A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.'
    },
  },
  create(context) {
    return {
      JSXElement(node: TSESTree.JSXElement) {
        if (
          isVoidElement(node.openingElement) &&
          hasJSXChildren(node)
        ) {
          context.report({
            node: node.openingElement.name as any,
            messageId: 'noChildren',
          });
        }
      },
      JSXAttribute(node: TSESTree.JSXAttribute) {
        if (
          node.name.name === 'children' &&
          isVoidElement(node.parent)
        ) {
          context.report({
            node: node.name as any,
            messageId: 'noChildren',
          });
        }
      },
    };
  },
};
