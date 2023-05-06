import { transformAsync } from '@babel/core';
import jsxSyntax from '@babel/plugin-syntax-jsx';

import { jsxOptimizer } from '../../src/babel/jsxOptimizer';

export const t = async (source: string): Promise<string> => {
  const { code } = await transformAsync(source, {
    plugins: [jsxSyntax, jsxOptimizer],
    minified: true,
    babelrc: false,
  });

  return code;
};
