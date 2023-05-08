import transformReactJsx from '@babel/plugin-transform-react-jsx';

import { jsxPlugin } from './jsxPlugin';
import { jsxOptimizer } from './jsxOptimizer';

const index = (api, {
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
          throwIfNamespace: false,
          useBuiltIns,
          useSpread,
        },
      ],
    ],
  };
};

export { index as default };
