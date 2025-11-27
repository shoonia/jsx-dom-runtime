import type { NodePath } from '@babel/core';
import type t from '@babel/types';

import { $identifier, $stringLiteral } from './builders';

export type TImportName = 'jsx' | 'Fragment' | 'svgNs' | 'mathmlNs' | 'setStyle';

export class ImportSpec {
  readonly #path: NodePath<t.Program>;
  readonly #cache = new Map<TImportName, t.Identifier>();
  readonly #specifiers: t.ImportSpecifier[] = [];

  public constructor(path: NodePath<t.Program>) {
    this.#path = path;
  }

  public add(importName: TImportName): t.Identifier {
    if (this.#cache.has(importName)) {
      return this.#cache.get(importName);
    }

    if (this.#specifiers.length === 0) {
      this.#path.unshiftContainer('body', {
        type: 'ImportDeclaration',
        specifiers: this.#specifiers,
        source: $stringLiteral('jsx-dom-runtime'),
      });
    }

    const uid = this.#path.scope.generateUid(importName);
    const local = $identifier(uid);

    this.#cache.set(importName, local);
    this.#specifiers.push({
      type: 'ImportSpecifier',
      local,
      imported: $identifier(importName),
    });

    return local;
  }
}
