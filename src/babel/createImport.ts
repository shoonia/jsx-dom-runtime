import type { NodePath } from '@babel/core';
import t from '@babel/types';
import { addNamed, addNamespace, isModule } from '@babel/helper-module-imports';

export const createImport = (path: NodePath<t.Program>) => {
  const cache = new Map();

  return (importName: 'jsx' | 'Fragment'): t.Identifier | t.StringLiteral => {
    const source = 'jsx-dom-runtime';
    const isMod = isModule(path);

    const key = isMod ? importName : source;

    if (cache.has(key)) {
      return t.cloneNode(cache.get(key));
    }

    const newImport = isMod
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
