const { realpathSync } = require('fs');
const { resolve } = require('path');
const { declare } = require('@babel/helper-plugin-utils');
const transformReactJSX = require('@babel/plugin-transform-react-jsx');

module.exports = declare((api, opts) => {
  api.assertVersion(7);

  const devDir = realpathSync(resolve(__dirname, '..', 'dev'));
  const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

  const {
    throwIfNamespace = true,
    useBuiltIns,
    useSpread,
  } = opts;

  return {
    plugins: [
      [
        transformReactJSX,
        {
          runtime: 'automatic',
          importSource: isDev ? devDir : 'jsx-dom-runtime',
          throwIfNamespace,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
});
