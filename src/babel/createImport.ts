import type { NodePath } from '@babel/core';
import t from '@babel/types';
import { addNamed, addNamespace } from '@babel/helper-module-imports';

export type TImportName = 'jsx' | 'Fragment' | 'svgNS' | 'mathmlNS' | 'xhtmlNS';

export const createImport = (path: NodePath<t.Program>) => {
  const cache = new Map<string, t.Identifier>();
  const isModule = path.node.sourceType === 'module';
  const source = 'jsx-dom-runtime';

  return (importName: TImportName): t.Identifier => {
    const key = isModule ? importName : source;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const newImport = isModule
      ? addNamed(path, importName, source, {
        importedInterop: 'uncompiled',
        importPosition: 'after',
      })
      : addNamespace(path, source, {
        importedInterop: 'uncompiled',
      });

    cache.set(key, newImport);

    return newImport;
  };
};
