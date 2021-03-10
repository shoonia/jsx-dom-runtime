const { resolve } = require('path');

module.exports = {
  presets: [
    resolve(process.cwd(), 'babel-preset'),
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: { node: 14 },
      },
    ],
  ],
}
