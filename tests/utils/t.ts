import { transformAsync } from '@babel/core';

// @ts-ignore
import preset from '../../babel-preset/index.cjs';

type TTemplate = string | TemplateStringsArray;

const getSource = (source: TTemplate): string =>
   typeof source === 'string' ? source : source[0];

export const t = async (source: TTemplate) => {
  const result = await transformAsync(getSource(source), {
    presets: [preset],
    ast: false,
    minified: true,
    babelrc: false,
    sourceMaps: false,
    configFile: false,
  });

  return result?.code ?? '';
};

export const jsxImport = (template: TTemplate): string =>
  `import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;

export const styleImport = (template: TTemplate): string =>
  `import{setStyle as _setStyle,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;
