import { join } from 'path';
import pkg from './jsx-runtime/package.json';

const resolve = (path) => join(pkg.name, path);

export default {
  input: resolve(pkg.source),
  output: [
    {
      file: resolve(pkg.main),
      format: 'cjs',
    },
    {
      file: resolve(pkg.module),
      format: 'esm',
    },
    {
      file: resolve(pkg['umd:main']),
      format: 'umd',
      name: pkg.amdName,
    },
  ],
};
