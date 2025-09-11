describe('babel-plugin-jsx-syntax: ImportSpecifier', () => {
  it('should generate unique import specifiers', async () => {
    await expect(`
        import { jsx as _jsx } from 'jsx-dom-runtime';

        const a = _jsx('div', {});
        const b = <div />
      `)
      .toBeTransform(
        'import{jsx as _jsx2}from"jsx-dom-runtime";import{jsx as _jsx}from"jsx-dom-runtime";const a=_jsx("div",{});const b=/*#__PURE__*/_jsx2("div",{});'
      );
  });
});
