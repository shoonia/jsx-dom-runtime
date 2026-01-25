import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
// @ts-ignore
import miniCssClassName from 'mini-css-class-name/postcss-modules';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  // @ts-ignore
  const generateScopedName = isProd
    ? miniCssClassName()
    : '[name]__[local]___[hash:base64:5]';

  return {
    root: 'src',
    base: '/jsx-dom-runtime/',
    server: { open: true },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      target: 'esnext',
      minify: isProd ? 'terser' : false,
      sourcemap: false,
      polyfillModulePreload: false,
      reportCompressedSize: true,
      terserOptions: {
        ecma: 2020,
        module: true,
        toplevel: true,
        compress: {
          ecma: 2020,
          module: true,
          comparisons: false,
          inline: 2,
          drop_console: false,
          passes: 3,
          toplevel: true,
          pure_getters: true,
          unsafe: true,
          unsafe_arrows: true,
          unsafe_undefined: true,
          unsafe_math: true,
          unsafe_symbols: true,
        },
      },
    },
    rollupOptions: {
      output: {
        compact: true,
      },
      treeshake: true,
    },
    css: {
      modules: {
        generateScopedName,
      },
    },
    esbuild: {
      jsx: 'preserve',
      legalComments: 'none',
      drop: ['console', 'debugger'],
      keepNames: false,
    },
    plugins: [
      babel({
        extensions: ['.ts', '.tsx'],
        babelHelpers: 'bundled',
        comments: false,
        presets: ['jsx-dom-runtime/babel-preset'],
      }),
    ],
  };
});
