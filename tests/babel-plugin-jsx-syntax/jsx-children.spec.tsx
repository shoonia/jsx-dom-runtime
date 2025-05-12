import { jsxImport } from '../utils';

describe('jsx-children', () => {
  it('should NOT have children with close tag', async () => {
    await expect('<div />').toBeTransform(jsxImport`_jsx("div",{});`);
  });

  it('should NOT have children with open tag', async () => {
    await expect('<div></div>').toBeTransform(jsxImport`_jsx("div",{});`);
  });

  it('should put children content to function argument', async () => {
    await expect('<div>hello</div>').toBeTransform(jsxImport`_jsx("div",{},"hello");`);
  });

  it('should put children property to function argument', async () => {
    await expect('<div children="hello"/>').toBeTransform(jsxImport`_jsx("div",{},"hello");`);
  });

  it('should put last children property to function argument', async () => {
    await expect('<div children="1" children="2" />').toBeTransform(jsxImport`_jsx("div",{},"2");`);
  });

  it('should put content children to function argument', async () => {
    await expect('<div children="1">2</div>').toBeTransform(jsxImport`_jsx("div",{},"2");`);
  });

  it('should put content children to function argument and skip app properties', async () => {
    await expect('<div children="1" children="2">3</div>').toBeTransform(jsxImport`_jsx("div",{},"3");`);
  });

  it('should have children as array', async () => {
    await expect('<div><p /><p /></div>').toBeTransform(jsxImport`_jsx("div",{},[/*#__PURE__*/_jsx("p",{}),/*#__PURE__*/_jsx("p",{})]);`);
  });
});
