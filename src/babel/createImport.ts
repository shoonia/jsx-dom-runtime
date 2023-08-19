import type { NodePath } from '@babel/core';
import type t from '@babel/types';

import { $identifier, $stringLiteral } from './builders';

export type TImportName = 'jsx' | 'Fragment' | 'svgNS' | 'mathmlNS' | 'xhtmlNS';

export class ImportSpec {
  readonly #path: NodePath<t.Program>;
  readonly #cache: Map<string, string> = new Map();
  readonly #specifiers: t.ImportSpecifier[] = [];

  public constructor(path: NodePath<t.Program>) {
    this.#path = path;
  }

  public add(importName: TImportName): t.Identifier {
    if (this.#cache.has(importName)) {
      return $identifier(this.#cache.get(importName));
    }

    if (this.#specifiers.length === 0) {
      this.#path.unshiftContainer('body', {
        type: 'ImportDeclaration',
        specifiers: this.#specifiers,
        source: $stringLiteral('jsx-dom-runtime'),
      });
    }

    const localName = '_' + importName;

    this.#cache.set(importName, localName);
    this.#specifiers.push({
      type: 'ImportSpecifier',
      local: $identifier(localName),
      imported: $identifier(importName),
    });

    return $identifier(localName);
  }
}
