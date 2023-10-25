import { transformAsync } from '@babel/core';

import preset from '../../babel-preset/index.cjs';

export const t = async (source: string | TemplateStringsArray): Promise<string> => {
  const { code } = await transformAsync(Array.isArray(source) ? source[0] : source, {
    presets: [preset],
    ast: false,
    minified: true,
    babelrc: false,
    sourceMaps: false,
  });

  return code;
};
