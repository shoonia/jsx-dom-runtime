import { transformAsync } from '@babel/core';

import index from '../../babel-preset/index.cjs';

export const t = async (source: string): Promise<string> => {
  const { code } = await transformAsync(source, {
    presets: [index],
    ast: false,
    minified: true,
    babelrc: false,
  });

  return code;
};
