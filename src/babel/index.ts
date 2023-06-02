import type { ConfigAPI } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import jsx from '@babel/plugin-syntax-jsx';

import { jsxSyntax } from './jsxSyntax';

const index = declare((api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsx,
      jsxSyntax,
    ],
  };
});

export { index as default };
