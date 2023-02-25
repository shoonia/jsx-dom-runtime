import transformReactJsx from '@babel/plugin-transform-react-jsx';
import { declarePreset } from '@babel/helper-plugin-utils';
import { jsxPlugin } from './jsxPlugin';

const index = declarePreset((api, {
  useBuiltIns,
  useSpread,
}) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsxPlugin,
      [
        transformReactJsx,
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
