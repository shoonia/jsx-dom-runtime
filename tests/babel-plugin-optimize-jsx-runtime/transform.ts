import { transformAsync } from '@babel/core';
import jsxSyntax from '@babel/plugin-syntax-jsx';

import index from '../../babel-preset/index.cjs';

export const t = async (source: string): Promise<string> => {
  const { code } = await transformAsync(source, {
    plugins: [jsxSyntax, index.jsxOptimizer],
    minified: true,
    babelrc: false,
  });

  return code;
};
