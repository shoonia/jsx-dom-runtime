import { transformAsync } from '@babel/core';

// @ts-ignore
import preset from '../../babel-preset/index.cjs';

type TTemplate = string | TemplateStringsArray;

export const t = async (source: TTemplate) => {
  const result = await transformAsync(Array.isArray(source) ? source[0] : source, {
    presets: [preset],
    ast: false,
    minified: true,
    babelrc: false,
    sourceMaps: false,
  });

  return result?.code ?? '';
};

export const jsxImport = (template: TTemplate): string =>
  `import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${Array.isArray(template) ? template[0] : template}`;
