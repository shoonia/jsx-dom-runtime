import { existsSync } from 'node:fs';
import { rm, mkdir, readdir, cp } from 'node:fs/promises';

export const emptyDir = async (path) => {
  if (existsSync(path)) await rm(path, { recursive: true });
  await mkdir(path);
};

export const buildPlugins = async (plugins) => {
  const [files] = await Promise.all([
    readdir('./src/plugins'),
    cp('./src/plugins', './plugins', { recursive: true }),
  ]);

  return files.map((i) => {
    return {
      input: `./plugins/${i}/index.ts`,
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
  });
};
