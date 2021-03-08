const { declare } = require('@babel/helper-plugin-utils');
const transformReactJSX = require('@babel/plugin-transform-react-jsx');

module.exports = declare((api, opts) => {
  api.assertVersion(7);

  const {
    importSource = 'jsx-dom-runtime',
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
          importSource,
          throwIfNamespace,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
});
