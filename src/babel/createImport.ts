import type { NodePath } from '@babel/core';
import type t from '@babel/types';

import { $identifier, $stringLiteral } from './builders';

export type TImportName = 'jsx' | 'Fragment' | 'svgNS' | 'mathmlNS' | 'xhtmlNS';

export const createImport = (path: NodePath<t.Program>) => {
  const newImport = (): t.ImportDeclaration => {
    const node: t.ImportDeclaration = {
      type: 'ImportDeclaration',
      specifiers: [],
      source: $stringLiteral('jsx-dom-runtime'),
      importKind: 'value',
    };

    path.unshiftContainer('body', node);

    return node;
  };

  const cache = new Map<string, string>();
  let declaration: t.ImportDeclaration;

  return (importName: TImportName): t.Identifier => {
    if (cache.has(importName)) {
      return $identifier(cache.get(importName));
    }

    declaration ??= newImport();

    const local = $identifier('_' + importName);
    const specifier: t.ImportSpecifier = {
      type: 'ImportSpecifier',
      local,
      imported: $identifier(importName),
      importKind: 'value',
    };

    cache.set(importName, local.name);
    declaration.specifiers.push(specifier);

    return local;
  };
};
