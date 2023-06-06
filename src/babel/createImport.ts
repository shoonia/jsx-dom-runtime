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
    declaration ??= newImport();

    if (cache.has(importName)) {
      return $identifier(cache.get(importName));
    }

    const local = $identifier('_' + importName);
    const specifier: t.ImportSpecifier = {
      type: 'ImportSpecifier',
      local,
      imported: $identifier(importName),
      importKind: 'value',
    };

    declaration.specifiers.push(specifier);
    cache.set(importName, local.name);

    return local;
  };
};
