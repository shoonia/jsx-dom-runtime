import type { NodePath } from '@babel/core';
import type t from '@babel/types';

import { $identifier, $stringLiteral } from './builders';

export type TImportName = 'jsx' | 'Fragment' | 'svgNs' | 'mathmlNs';

export class ImportSpec {
  readonly #path: NodePath<t.Program>;
  readonly #cache: Map<TImportName, t.Identifier> = new Map();
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

    const local = $identifier('_' + importName);

    this.#cache.set(importName, local);
    this.#specifiers.push({
      type: 'ImportSpecifier',
      local,
      imported: $identifier(importName),
    });

    return local;
  }
}
