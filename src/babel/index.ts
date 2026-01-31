import type { ConfigAPI } from '@babel/core';

import { jsxTransform } from './jsxTransform';

const preset = (api: ConfigAPI) => {
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
};

export { preset as default };
