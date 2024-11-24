import { writeFile } from 'node:fs/promises';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json' with { type: 'json' };
import { emptyDir, buildPlugins } from './rollup.build.js';

const extensions = ['.ts'];

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

await Promise.all([
  emptyDir('./babel-preset'),
  emptyDir('./jsx-runtime'),
  emptyDir('./plugins'),
]);

const [list] = await Promise.all([
  buildPlugins(plugins),
  writeFile(
    './jsx-runtime/index.d.ts',
    'export * from "../index"',
  ),
]);

export default [
  ...list,
  {
    input: 'src/babel/index.ts',
    output: [
      {
        file: pkg.exports['./babel-preset'],
        exports: 'default',
        format: 'cjs',
      },
    ],
    external: Object.keys(pkg.peerDependencies),
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
      // {
      //   file: pkg.main,
      //   format: 'cjs',
      //   esModule: false,
      // },
    ],
    plugins,
  },
];
