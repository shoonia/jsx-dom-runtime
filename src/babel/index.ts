import type { ConfigAPI } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';

import { jsxTransform } from './jsxTransform';

const preset = declare((api: ConfigAPI) => {
  api.assertVersion(7);

  return {
    plugins: [
      {
        manipulateOptions(_, parser) {
          parser.plugins.push('jsx');
        },
      },
      jsxTransform,
    ],
  };
});

export { preset as default };
