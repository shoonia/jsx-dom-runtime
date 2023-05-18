import { transformAsync } from '@babel/core';

import index from '../../babel-preset/index.cjs';

export const t = async (source: string | TemplateStringsArray): Promise<string> => {
  const { code } = await transformAsync(Array.isArray(source) ? source[0] : source, {
    presets: [index],
    ast: false,
    minified: true,
    babelrc: false,
  });

  return code;
};
