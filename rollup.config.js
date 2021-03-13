import { join } from 'path';
import { emptyDirSync, outputJSONSync } from 'fs-extra';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const dist = 'jsx-runtime';
const source = 'jsxRuntime.js';
const esm = 'jsxRuntime.esm.js';
const moduleJs = 'jsxRuntime.module.js';
const cjs = 'jsxRuntime.cjs.js';

const pkg = {
  name: dist,
  version: '1.0.0',
  description: 'JSX runtime',
  sideEffects: false,
  source,
  main: cjs,
  module: moduleJs,
  exports: `./${esm}`,
  esmodule: esm,
  private: true,
  license: 'MIT',
};

const bablePlugin = getBabelOutputPlugin({
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: 'defaults',
      },
    ],
  ],
});

const terserPlugin = terser({
  module: true,
});

emptyDirSync(dist);
outputJSONSync(join(dist, 'package.json'), pkg, { spaces: 2 });

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: join(dist, source),
        format: 'esm',
      },
      {
        file: join(dist, esm),
        format: 'esm',
        plugins: [
          terserPlugin,
        ],
      },
      {
        file: join(dist, moduleJs),
        format: 'esm',
        plugins: [
          bablePlugin,
          terserPlugin,
        ],
      },
      {
        file: join(dist, cjs),
        format: 'cjs',
        plugins: [
          bablePlugin,
          terserPlugin,
        ],
      },
    ],
  },
  {
    input: 'src/development/index.js',
    output: [
      {
        file: 'dev/jsx-runtime.js',
        format: 'cjs',
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
    ],
  },
];
