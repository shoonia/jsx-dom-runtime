import type { TSESLint } from '@typescript-eslint/utils';

import { hasJSXChildren, isVoidElement } from './utils';

export const rule: TSESLint.RuleModule<string, []> = {
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Void_element',
    },
    fixable: 'code',
    schema: [],
    messages: {
      noChildren: 'Void elements cannot have children or a children attribute. A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.',
      mustSelfClose: 'The void elements must use self-closing-tag syntax in their start tag instead of a closing tag.'
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        if (isVoidElement(node.openingElement)) {
          if (hasJSXChildren(node)) {
            context.report({
              node: node.openingElement.name,
              messageId: 'noChildren',
            });
          } else if (node.closingElement) {
            context.report({
              node: node.closingElement.name,
              messageId: 'mustSelfClose',
              fix: fixer => {
                const end = node.openingElement.range[1];

                return [
                  fixer.replaceTextRange([end - 1, end], ' />'),
                  fixer.remove(node.closingElement),
                ];
              },
            });
          }
        }
      },
      JSXAttribute(node) {
        if (
          node.name.name === 'children' &&
          isVoidElement(node.parent)
        ) {
          context.report({
            node: node.name,
            messageId: 'noChildren',
          });
        }
      },
    };
  },
};
