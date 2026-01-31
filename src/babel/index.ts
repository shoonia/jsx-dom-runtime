import type { ConfigAPI } from '@babel/core';

import { jsxTransform, type PluginOptions } from './jsxTransform';

const preset = (api: ConfigAPI, options?: Partial<PluginOptions>) => {
  api.assertVersion(7);

  return {
    plugins: [
      {
        manipulateOptions(_, parser) {
          parser.plugins.push('jsx');
        },
      },
      jsxTransform({
        useEmptyImport: false,
        ...options,
      }),
    ],
  };
};

export { preset as default };
