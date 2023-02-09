import { declarePreset } from '@babel/helper-plugin-utils';
import _createPlugin from '@babel/plugin-transform-react-jsx/lib/create-plugin.js';

const createPlugin = typeof _createPlugin.default === 'function'
  ? _createPlugin.default
  : _createPlugin;

const index = declarePreset((api, {
  useBuiltIns,
  useSpread,
  nodeEnv = process.env.NODE_ENV,
}) => {
  api.assertVersion(7);

  return {
    plugins: [
      [
        createPlugin({
          name: 'jsx-dom-runtime/babel-preset',
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

export { index as default };
