import type { NodePath } from '@babel/core';
import t from '@babel/types';
import { addNamed } from '@babel/helper-module-imports';

export type TImportName = 'jsx' | 'Fragment' | 'svgNS' | 'mathmlNS' | 'xhtmlNS';

export const createImport = (path: NodePath<t.Program>) => {
  const cache = new Map<string, t.Identifier>();

  return (importName: TImportName): t.Identifier => {
    if (cache.has(importName)) {
      return cache.get(importName);
    }

    const newImport = addNamed(path, importName, 'jsx-dom-runtime', {
      importedInterop: 'uncompiled',
      importPosition: 'after',
    });

    cache.set(importName, newImport);

    return newImport;
  };
};
