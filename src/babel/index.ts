import type { ConfigAPI, TransformOptions } from '@babel/core';
import transformReactJsx from '@babel/plugin-transform-react-jsx';

import { jsxPlugin } from './jsxPlugin';
import { jsxOptimizer } from './jsxOptimizer';

const index = (api: ConfigAPI, {
  useBuiltIns,
  useSpread,
}): TransformOptions => {
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
          throwIfNamespace: false,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
};

export { index as default };
