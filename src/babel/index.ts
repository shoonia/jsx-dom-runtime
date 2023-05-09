import type { ConfigAPI, TransformOptions } from '@babel/core';
import jsx from '@babel/plugin-syntax-jsx';

import { jsxSyntax } from './jsxSyntax';
import { jsxPlugin } from './jsxPlugin';
import { jsxOptimizer } from './jsxOptimizer';

const index = (api: ConfigAPI, {
  useBuiltIns,
  useSpread,
}): TransformOptions => {
  api.assertVersion(7);

  return {
    plugins: [
      jsx,
      jsxPlugin,
      jsxOptimizer,
      [
        jsxSyntax({
          name: 'transform-react-jsx',
          development: false,
        }), {
          runtime: 'automatic',
          importSource: 'jsx-dom-runtime',
          throwIfNamespace: false,
          useBuiltIns,
          useSpread,
        }
      ],
    ],
  };
};

index.jsxOptimizer = jsxOptimizer;
export { index as default };
