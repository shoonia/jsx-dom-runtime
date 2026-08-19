import { defineConfig } from 'rolldown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig([
  {
    input: 'src/babel/index.ts',
    output: [
      {
        file: pkg.exports['./babel-preset'],
        exports: 'default',
        comments: false,
        cleanDir: true,
        format: 'es',
      },
    ],
    platform: 'node',
    external: Object.keys(pkg.peerDependencies),
  },
  {
    input: 'src/eslint/index.ts',
    output: [
      {
        file: pkg.exports['./eslint-plugin'],
        exports: 'default',
        comments: false,
        cleanDir: true,
        format: 'es',
      },
    ],
    platform: 'node',
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        cleanDir: true,
      },
    ],
    platform: 'browser',
    plugins: [
      {
        name: 'types',
        generateBundle() {
          this.emitFile({
            type: 'asset',
            fileName: 'index.d.ts',
            source: 'export * from "../index"',
          });
        }
      }
    ]
  },
]);
