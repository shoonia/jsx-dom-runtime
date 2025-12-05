import { existsSync } from 'node:fs';
import { rm, mkdir, writeFile } from 'node:fs/promises';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
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

const extensions = ['.ts'];
const external = Object.keys(pkg.peerDependencies);

const plugins = [
  babel({
    extensions,
    babelHelpers: 'bundled',
    plugins: [
      'babel-plugin-transform-lhs-constants'
    ],
    presets: [
      '@babel/preset-typescript',
    ],
    shouldPrintComment: (value) => value === '#__PURE__',
  }),
  nodeResolve({
    extensions,
  }),
];

export default [
  {
    input: 'src/babel/index.ts',
    output: [
      {
        file: pkg.exports['./babel-preset'],
        exports: 'default',
        format: 'cjs',
      },
    ],
    external,
    plugins,
  },
  {
    input: 'src/eslint/index.ts',
    output: [
      {
        file: pkg.exports['./eslint-plugin'],
        exports: 'default',
        format: 'cjs',
      },
    ],
    external,
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
      {
        file: pkg.main,
        format: 'cjs',
        esModule: false,
      },
    ],
    plugins,
  },
];
