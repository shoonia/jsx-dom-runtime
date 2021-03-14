const { declare } = require('@babel/helper-plugin-utils');
const createPlugin = require('@babel/plugin-transform-react-jsx/lib/create-plugin').default;

module.exports = declare((api, { useBuiltIns, useSpread }) => {
  api.assertVersion(7);

  const isDev = process.env.NODE_ENV === 'development';

  return {
    plugins: [
      [
        createPlugin({
          name: 'jsx-dom-runtime',
          development: isDev,
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
