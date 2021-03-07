import { join } from 'path';
import { emptyDirSync, outputJSONSync } from 'fs-extra';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const dist = 'jsx-runtime';
const amdName = 'jsxRuntime';
const source = 'jsxRuntime.js';
const esm = 'jsxRuntime.esm.js';
const moduleJs = 'jsxRuntime.module.js';
const cjs = 'jsxRuntime.cjs.js';
const umd = 'jsxRuntime.umd.js';
const amd = 'jsxRuntime.amd.js';

const pkg = {
  name: dist,
  amdName,
  version: '1.0.0',
  description: 'JSX runtime',
  source,
  main: cjs,
  module: moduleJs,
  exports: `./${esm}`,
  esmodule: esm,
  unpkg: umd,
  'umd:main': umd,
  private: true,
  license: 'MIT',
};

const presets = [
  [
    '@babel/preset-env',
    {
      loose: true,
      targets: 'defaults',
    },
  ],
];

const resolve = (path) => join(dist, path);

emptyDirSync(dist);
outputJSONSync(resolve('package.json'), pkg, { spaces: 2 });

export default {
  input: join('src', source),
  output: [
    {
      file: resolve(source),
      format: 'esm',
    },
    {
      file: resolve(esm),
      format: 'esm',
      plugins: [
        terser(),
      ],
    },
    {
      file: resolve(moduleJs),
      format: 'esm',
      plugins: [
        getBabelOutputPlugin({
          presets
        }),
        terser(),
      ],
    },
    {
      file: resolve(cjs),
      format: 'cjs',
      plugins: [
        getBabelOutputPlugin({
          presets
        }),
        terser(),
      ],
    },
    {
      name: amdName,
      file: resolve(amd),
      plugins: [
        getBabelOutputPlugin({
          presets,
          plugins: [
            '@babel/plugin-transform-modules-amd',
          ],
        }),
        terser(),
      ],
    },
    {
      name: amdName,
      file: resolve(umd),
      plugins: [
        getBabelOutputPlugin({
          presets,
          plugins: [
            '@babel/plugin-transform-modules-umd',
          ],
        }),
        terser(),
      ],
    },
  ],
};
