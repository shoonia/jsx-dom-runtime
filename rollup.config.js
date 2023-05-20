import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

await Promise.all([
  fse.emptyDir('./babel-preset'),
  fse.emptyDir('./jsx-runtime'),
]);

fse.writeFile('./jsx-runtime/index.d.ts', 'export * from "../index"');

const extensions = ['.js', '.ts'];

const plugins =  [
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
        file: './babel-preset/index.cjs',
        exports: 'default',
        format: 'cjs',
      },
    ],
    external: [
      '@babel/helper-module-imports',
      '@babel/plugin-syntax-jsx',
      '@babel/types',
      'svg-tags',
      'html-tags',
    ],
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: './jsx-runtime/index.js',
        format: 'es',
      },
      {
        file: './jsx-runtime/index.cjs',
        format: 'cjs',
        esModule: false,
      },
    ],
    plugins,
  },
];
