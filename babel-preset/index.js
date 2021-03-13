const { declare } = require('@babel/helper-plugin-utils');
const transformReactJSX = require('@babel/plugin-transform-react-jsx');

module.exports = declare((api, {
  useBuiltIns,
  useSpread,
}) => {
  api.assertVersion(7);

  const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

  return {
    plugins: [
      [
        transformReactJSX,
        {
          runtime: 'automatic',
          importSource: isDev ? 'jsx-dom-runtime/dev' : 'jsx-dom-runtime',
          throwIfNamespace: true,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
});
