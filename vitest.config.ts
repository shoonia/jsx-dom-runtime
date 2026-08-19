import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';
import { t } from './tests/utils/t.ts';

const babelPlugin: Plugin = {
  name: 'babel',
  enforce: 'post',
  async transform(code, id) {
    if (id.endsWith('.tsx')) {
      return {
        code: await t(code, id, false),
      };
    };
  },
};

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts?(x)'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/utils/setup.ts',
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
