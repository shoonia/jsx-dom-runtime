import { transformAsync } from '@babel/core';
import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';
import preset from './babel-preset/index.js';

const babelPlugin: Plugin = {
  name: "babel",
  enforce: 'post',
  async transform(code, id) {
    if (!id.endsWith('.tsx') || id.includes('/node_modules/')) return;

    const respnse = await transformAsync(code, {
      presets: [preset as any],
      filename: id,
      ast: false,
    });

    return {
      code: respnse?.code ?? '',
    };
  },
};

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts?(x)'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/utils/jest-setup.ts',
    pool: 'threads',
  },
  oxc: {
    target: 'esnext',
    jsx: 'preserve',
  },
  plugins: [
    babelPlugin,
  ],
});
