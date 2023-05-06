import transformReactJsx from '@babel/plugin-transform-react-jsx';
import { declarePreset } from '@babel/helper-plugin-utils';

import { jsxPlugin } from './jsxPlugin';
import { jsxOptimizer } from './jsxOptimizer';

const index = declarePreset((api, {
  useBuiltIns,
  useSpread,
}) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsxPlugin,
      jsxOptimizer,
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
