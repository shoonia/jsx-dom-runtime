import type { NodePath } from '@babel/core';
import type t from '@babel/types';

import { $identifier, $stringLiteral } from './builders';

export type TImportName = 'jsx' | 'Fragment' | 'svgNS' | 'mathmlNS' | 'xhtmlNS';

export const createImport = (path: NodePath<t.Program>) => {
  const cache = new Map<string, string>();
  let specifiers: t.ImportSpecifier[];

  return (importName: TImportName): t.Identifier => {
    if (cache.has(importName)) {
      return $identifier(cache.get(importName));
    }

    if (specifiers === undefined) {
      specifiers = [];

      path.unshiftContainer('body', {
        type: 'ImportDeclaration',
        specifiers,
        source: $stringLiteral('jsx-dom-runtime'),
      });
    }

    const localName = '_' + importName;

    cache.set(importName, localName);
    specifiers.push({
      type: 'ImportSpecifier',
      local: $identifier(localName),
      imported: $identifier(importName),
    });

    return $identifier(localName);
  };
};
