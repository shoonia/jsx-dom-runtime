import type { ConfigAPI } from '@babel/core';
import jsx from '@babel/plugin-syntax-jsx';

import { jsxSyntax } from './jsxSyntax';

const index = (api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsx,
      jsxSyntax,
    ],
  };
};

export { index as default };
