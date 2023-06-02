import type { ConfigAPI } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import jsxSyntax from '@babel/plugin-syntax-jsx';

import { jsxTransform } from './jsxTransform';

const preset = declare((api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      jsxSyntax,
      jsxTransform,
    ],
  };
});

export { preset as default };
