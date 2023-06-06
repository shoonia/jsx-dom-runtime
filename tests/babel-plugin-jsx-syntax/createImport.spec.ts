import { t } from '../utils';

describe('babel-plugin-jsx-syntax: createImport()', () => {
  it('should add all imports', async () => {
    const result = await t`<><svg /></>`;
    expect(result).toBe(
      'import{Fragment as _Fragment,svgNS as _svgNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_Fragment(/*#__PURE__*/_jsx("svg",{ns:_svgNS}));'
    );
  });
});
