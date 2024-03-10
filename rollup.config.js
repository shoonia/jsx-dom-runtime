import { existsSync } from 'node:fs';
import { rm, mkdir, writeFile } from 'node:fs/promises';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json' with { type: 'json' };

const emptyDir = async (path) => {
  if (existsSync(path)) await rm(path, { recursive: true });
  await mkdir(path);
};

await Promise.all([
  emptyDir('./babel-preset'),
  emptyDir('./jsx-runtime'),
]);

await writeFile(
  './jsx-runtime/index.d.ts',
  'export * from "../index"',
);

const extensions = ['.ts'];

const plugins = [
  babel({
    extensions,
    babelHelpers: 'bundled',
    plugins: [
      () => {
        const equalities = new Set(['==', '===', '!=', '!==']);
        const types = new Set(['StringLiteral', 'NumericLiteral', 'NullLiteral', 'BooleanLiteral']);

        return {
          name: 'lhs-constants',
          visitor: {
            BinaryExpression(path) {
              const node = path.node;

              if (
                equalities.has(node.operator) &&
                types.has(node.right.type)
              ) {
                [node.left, node.right] = [node.right, node.left];
              }
            }
          }
        };
      }
    ],
    presets: [
      '@babel/preset-typescript',
    ],
    comments: false,
  }),
  nodeResolve({
    extensions,
  }),
];

export default [
  {
    input: 'src/babel/index.ts',
    output: [
      {
        file: pkg.exports['./babel-preset'],
        exports: 'default',
        format: 'cjs',
      },
    ],
    external: Object.keys(pkg.peerDependencies),
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
      {
        file: pkg.main,
        format: 'cjs',
        esModule: false,
      },
    ],
    plugins,
  },
];
