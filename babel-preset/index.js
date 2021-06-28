const { declare } = require('@babel/helper-plugin-utils');
const createPlugin = require('@babel/plugin-transform-react-jsx/lib/create-plugin').default;

module.exports = declare((api, {
  useBuiltIns,
  useSpread,
  nodeEnv = process.env.NODE_ENV,
}) => {
  api.assertVersion(7);

  return {
    plugins: [
      [
        createPlugin({
          name: 'jsx-dom-runtime',
          development: nodeEnv === 'development',
        }),
        {
          runtime: 'automatic',
          importSource: 'jsx-dom-runtime',
          throwIfNamespace: true,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
});
