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

['dist', 'jsx-runtime', 'jsx-dev-runtime', 'babel-preset'].forEach((i) => {
  if (existsSync(i)) {
    rmSync(i, { recursive: true });
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
