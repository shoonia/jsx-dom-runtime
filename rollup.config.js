import { rmSync, existsSync } from 'node:fs';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts'];

['./babel-preset', './jsx-runtime'].forEach((path) => {
  if (existsSync(path)) {
    rmSync(path, { recursive: true });
  }
});

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
      nodeResolve({
        extensions,
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-typescript',
        ],
      }),
    ],
  },
];
