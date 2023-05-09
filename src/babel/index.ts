import type { ConfigAPI } from '@babel/core';
import jsx from '@babel/plugin-syntax-jsx';

import { jsxSyntax } from './jsxSyntax';
import { jsxPlugin } from './jsxPlugin';
import { jsxOptimizer } from './jsxOptimizer';

const index = (api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsx,
      jsxPlugin,
      jsxOptimizer,
      jsxSyntax,
    ],
  };
};

index.jsxOptimizer = jsxOptimizer;
export { index as default };
