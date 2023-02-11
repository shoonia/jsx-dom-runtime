import { createRequire } from 'node:module';
import { rmSync, existsSync } from 'node:fs';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('./package.json')} */
const pkg = createRequire(import.meta.url)('./package.json');

const extensions = ['.js', '.ts'];

const plugins = [
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

[
  './babel-preset',
  './jsx-runtime',
  './jsx-dev-runtime',
].forEach((path) => {
  if (existsSync(path)) {
    rmSync(path, { recursive: true });
  }
});

export default [
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
        esModule: false,
      },
    ],
  },
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
        esModule: false,
      },
    ],
    plugins,
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
        esModule: false,
      },
    ],
    plugins,
  },
];
