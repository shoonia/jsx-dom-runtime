const { resolve } = require('path');

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: { node: 14 },
      },
    ],
  ],
  plugins: [
    [
      '@babel/transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: resolve(process.cwd()),
      }
    ]
  ]
}
