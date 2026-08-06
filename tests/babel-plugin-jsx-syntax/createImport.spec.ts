describe('babel-plugin-jsx-syntax: createImport()', () => {
  it('should add import before exist one', async () => {
    await expect(`
      import _ from 'lodash';
      const x = <div />;
  `).toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";import _ from"lodash";const x=/*#__PURE__*/_jsx("div",{});');
  });
});
