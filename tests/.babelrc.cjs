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
    resolve(process.cwd(), 'babel-preset/index.js'),
  ],
}
