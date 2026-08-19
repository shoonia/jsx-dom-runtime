import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { defineConfig } from 'rolldown';
import pkg from './package.json' with { type: 'json' };

const emptyDir = async (path: string) => {
  if (existsSync(path)) await rm(path, { recursive: true });
  await mkdir(path);
};

await Promise.all([
  emptyDir('./babel-preset'),
  emptyDir('./jsx-runtime'),
  emptyDir('./eslint-plugin'),
]);

await writeFile(
  './jsx-runtime/index.d.ts',
  'export * from "../index"',
);

export default defineConfig([
  {
    input: 'src/babel/index.ts',
    output: [
      {
        file: pkg.exports['./babel-preset'],
        exports: 'default',
        comments: false,
        format: 'es',
      },
    ],
    platform: "node",
    external: Object.keys(pkg.peerDependencies),
  },
  {
    input: 'src/eslint/index.ts',
    output: [
      {
        file: pkg.exports['./eslint-plugin'],
        exports: 'default',
        comments: false,
        format: 'es',
      },
    ],
    platform: "node",
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    platform: "browser",
  },
]);
