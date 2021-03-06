const { resolve } = require('path');

module.exports = {
  presets: [
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    [
      '@babel/transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: resolve(process.cwd(), 'src'),
      }
    ]
  ]
}
