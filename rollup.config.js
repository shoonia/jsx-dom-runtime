import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert { type: 'json' };

await Promise.all([
  fse.emptyDir('./babel-preset'),
  fse.emptyDir('./jsx-runtime'),
]);

await fse.writeFile('./jsx-runtime/index.d.ts', 'export * from "../index"');

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
];
