import { rmSync, existsSync } from 'fs';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const outputDirs = ['dist', 'jsx-runtime', 'jsx-dev-runtime', 'babel-preset'];
const extensions = ['.js', '.ts'];

const plugins = [
  commonjs(),
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
];

const terserPlugin = terser({
  module: true,
});

outputDirs.forEach((i) => {
  if (existsSync(i)) {
    rmSync(i, { recursive: true });
  }
});

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.exports['./jsx-runtime'].import,
        format: 'es',
      },
      {
        file: pkg.exports['./jsx-runtime'].require,
        format: 'cjs',
      },
    ],
    plugins: [
      terserPlugin,
    ],
  },
  {
    input: 'src/lib/index.ts',
    output: [
      {
        file: pkg.exports['.'].import,
        format: 'es',
      },
      {
        file: pkg.exports['.'].require,
        format: 'cjs',
      },
    ],
    plugins: [
      ...plugins,
      terserPlugin,
    ],
  },
  {
    input: 'src/development/index.ts',
    output: [
      {
        file: pkg.exports['./jsx-dev-runtime'].import,
        format: 'es',
      },
      {
        file: pkg.exports['./jsx-dev-runtime'].require,
        format: 'cjs',
      },
    ],
    plugins,
  },
  {
    input: 'src/babel/index.js',
    output: [
      {
        file: pkg.exports['./babel-preset'].import,
        exports: 'default',
        format: 'es',
      },
      {
        file: pkg.exports['./babel-preset'].require,
        exports: 'default',
        format: 'cjs',
      },
    ],
  }
];
