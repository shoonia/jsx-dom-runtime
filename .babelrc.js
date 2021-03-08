const { resolve } = require('path');

const root = process.cwd();

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: { node: 14 },
      },
    ],
    [
      resolve(root, 'babel-preset'),
      {
        importSource: resolve(root),
      }
    ]
  ],
}
