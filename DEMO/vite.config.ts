import { defineConfig, type UserConfig } from 'vite';
import babel from '@rolldown/plugin-babel';
import generateScopedName from 'mini-css-class-name/postcss-modules';

export default defineConfig(({ mode }): UserConfig => {
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
      cssCodeSplit: false,
      reportCompressedSize: true,
      rolldownOptions: {
        treeshake: isProd,
      },
    },
    css: {
      modules: {
        generateScopedName: isProd
          ? generateScopedName()
          : '[name]__[local]___[hash:base64:5]',
      },
    },
    oxc: {
      jsx: 'preserve',
      target: 'esnext',
    },
    plugins: [
      babel({
        include: /\.tsx$/,
        comments: isDev,
        sourceMap: isDev,
        presets: ['jsx-dom-runtime/babel-preset'],
      }),
    ],
  };
});
