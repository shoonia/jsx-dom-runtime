import fse from 'fs-extra';
import { babel } from '@rollup/plugin-babel';

fse.ensureDir('./babel-preset');
fse.ensureDir('./jsx-runtime');
fse.writeFileSync('./jsx-runtime/index.d.ts', 'export * from "../index"');

export default [
  {
    input: 'src/babel/index.js',
    output: [
      {
        file: './babel-preset/index.js',
        exports: 'default',
        format: 'es',
      },
      {
        file: './babel-preset/index.cjs',
        exports: 'default',
        format: 'cjs',
      },
    ],
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
    plugins: [
      babel({
        extensions: ['.js', '.ts', '.jsx'],
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-typescript',
        ],
      }),
    ],
  },
];
