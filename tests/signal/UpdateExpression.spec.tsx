import { jsxImport } from '../utils';

describe('UpdateExpression', () => {
  it('should not use signalish for ++ prefix update operator in prop and attr values', async () => {
    await expect('<div attr:foo={++foo} prop:bar={++foo} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",++foo);e.bar=++foo;}});`
    );
  });

  it('should not use signalish for ++ postfix update operator in prop and attr values', async () => {
    await expect('<div attr:foo={foo++} prop:bar={foo++} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo++);e.bar=foo++;}});`
    );
  });

  it('should not use signalish for -- prefix update operator in prop and attr values', async () => {
    await expect('<div attr:foo={--foo} prop:bar={--foo} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",--foo);e.bar=--foo;}});`
    );
  });

  it('should not use signalish for -- postfix update operator in prop and attr values', async () => {
    await expect('<div attr:foo={foo--} prop:bar={foo--} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo--);e.bar=foo--;}});`
    );
  });
});
