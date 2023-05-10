import type { ConfigAPI } from '@babel/core';

import { jsxOptimizer } from './jsxOptimizer';
import { jsxSyntax } from './jsxSyntax';

const index = (api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsxOptimizer,
      jsxSyntax,
    ],
  };
};

index.jsxOptimizer = jsxOptimizer;
export { index as default };
