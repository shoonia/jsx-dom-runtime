import { transformAsync } from '@babel/core';

// @ts-ignore
import preset from '../../babel-preset/index.js';

type TTemplate = string | TemplateStringsArray;

const getSource = (source: TTemplate): string =>
  typeof source === 'string' ? source : source[0];

export const t = async (source: TTemplate, filename: string, minified: boolean) => {
  const result = await transformAsync(getSource(source), {
    filename,
    minified,
    presets: [preset],
    ast: false,
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

export const svgImport = (template: TTemplate): string =>
  `import{svgNs as _svgNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;

export const mathmlImport = (template: TTemplate): string =>
  `import{mathmlNs as _mathmlNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;

export const attrImport = (template: TTemplate): string =>
  `import{setAttributes as _setAttributes,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;

export const dataImport = (template: TTemplate): string =>
  `import{setDataset as _setDataset,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;

export const signalishImport = (template: TTemplate): string =>
  `import{setSignalish as _setSignalish,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/${getSource(template)}`;
