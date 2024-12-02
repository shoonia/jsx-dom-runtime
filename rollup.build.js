import { existsSync } from 'node:fs';
import { rm, mkdir, readdir, copyFile } from 'node:fs/promises';

export const emptyDir = async (path) => {
  if (existsSync(path)) await rm(path, { recursive: true });
  await mkdir(path);
};

export const buildPlugins = async (plugins) => {
  const files = await readdir('./src/plugins');

  return Promise.all(
    files.map(async (i) => {
      await mkdir(`./plugins/${i}`);
      await copyFile(
        `./src/plugins/${i}/index.d.ts`,
        `./plugins/${i}/index.d.ts`,
      );

      return {
        input: `./src/plugins/${i}/index.ts`,
        output: [
          {
            file: `./plugins/${i}/index.js`,
            format: 'es',
          },
          {
            file: `./plugins/${i}/index.cjs`,
            format: 'cjs',
            esModule: false,
          },
        ],
        external: ['jsx-dom-runtime'],
        plugins,
      };
    }),
  );
};
