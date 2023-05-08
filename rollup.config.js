import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

fse.emptyDirSync('./babel-preset');
fse.emptyDirSync('./jsx-runtime');
fse.writeFileSync('./jsx-runtime/index.d.ts', 'export * from "../index"');

const extensions = ['.js', '.ts'];

const plugins =  [
  babel({
    extensions,
    babelHelpers: 'bundled',
    presets: [
      '@babel/preset-typescript',
    ],
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
      '@babel/plugin-transform-react-jsx',
      '@babel/types',
      'svg-tags',
      'html-tags',
    ],
    plugins,
  },
  {
    input: 'src/index.js',
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
