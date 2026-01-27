import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import generateScopedName from 'mini-css-class-name/postcss-modules';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    root: 'src',
    base: '/jsx-dom-runtime/',
    server: { open: true },
    build: {
      outDir: '../dist',
      assetsDir: '.',
      emptyOutDir: true,
      target: 'esnext',
      minify: isProd ? 'terser' : false,
      sourcemap: isDev,
      modulePreload: false,
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          compact: true,
        },
        treeshake: true,
      },
    },
    css: {
      modules: {
        generateScopedName: isProd
          ? generateScopedName()
          : '[name]__[local]___[hash:base64:5]',
      },
    },
    esbuild: {
      jsx: 'preserve',
      legalComments: 'none',
      drop: ['console', 'debugger'],
      keepNames: isDev,
      treeShaking: true,
      minifyIdentifiers: isProd,
      minifySyntax: isProd,
      minifyWhitespace: isProd,
    },
    plugins: [
      babel({
        extensions: ['.ts', '.tsx'],
        babelHelpers: 'bundled',
        comments: isDev,
        presets: ['jsx-dom-runtime/babel-preset'],
      }),
    ],
  };
});
