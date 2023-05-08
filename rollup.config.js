import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';

fse.emptyDirSync('./babel-preset');
fse.emptyDirSync('./jsx-runtime');
fse.writeFileSync('./jsx-runtime/index.d.ts', 'export * from "../index"');

const plugins =  [
  babel({
    extensions: ['.js', '.ts'],
    babelHelpers: 'bundled',
    presets: [
      '@babel/preset-typescript',
    ],
  }),
];

export default [
  {
    input: 'src/babel/index.js',
    output: [
      {
        file: './babel-preset/index.cjs',
        exports: 'default',
        format: 'cjs',
      },
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
