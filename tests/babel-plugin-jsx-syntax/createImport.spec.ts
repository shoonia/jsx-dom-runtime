describe('babel-plugin-jsx-syntax: createImport()', () => {
  it('should add all imports', async () => {
    await expect('<><svg /></>')
      .toBeTransform('import{Fragment as _Fragment,svgNs as _svgNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_Fragment(/*#__PURE__*/_jsx("svg",{ns:_svgNs}));');
  });

  it('should add import before exist one', async () => {
    await expect(`
      import _ from 'lodash';
      const x = <div />;
  `).toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";import _ from"lodash";const x=/*#__PURE__*/_jsx("div",{});');
  });
});
