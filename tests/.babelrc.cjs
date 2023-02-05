const { resolve } = require('node:path');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          node: 'current'
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: resolve(process.cwd()),
      },
    ],
  ],
}
