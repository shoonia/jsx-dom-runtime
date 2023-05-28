import { createRequire } from 'node:module';
import { exec } from 'node:child_process';
import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

/** @type {import('./package.json')} */
const pkg = createRequire(import.meta.url)('./package.json');

await Promise.all([
  fse.emptyDir('./babel-preset'),
  fse.emptyDir('./extensions'),
  fse.emptyDir('./jsx-runtime'),
]);

await Promise.all([
  fse.writeFile('./jsx-runtime/index.d.ts', 'export * from "../index"'),
  exec(pkg.scripts.emitDeclaration),
]);

const extensions = ['.js', '.ts'];

const plugins = [
  babel({
    extensions,
    babelHelpers: 'bundled',
    presets: [
      '@babel/preset-typescript',
    ],
    comments: false,
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
    external: Object.keys(pkg.dependencies),
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
  {
    input: './src/extensions/xlink.ts',
    output: [
      {
        file: pkg.exports['./extensions/xlink'].import,
        format: 'es',
      },
      {
        file: pkg.exports['./extensions/xlink'].require,
        format: 'cjs',
        esModule: false,
      },
    ],
    external: ['../jsx-runtime'],
    plugins,
  }
];
