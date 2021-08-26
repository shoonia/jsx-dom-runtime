import { declare } from '@babel/helper-plugin-utils';
import createPlugin from '@babel/plugin-transform-react-jsx/lib/create-plugin';

const index = declare((api, {
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

export { index as default };
