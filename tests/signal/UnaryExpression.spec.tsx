import { jsxImport } from '../utils/t';

describe('unary operator behavior', () => {
  it('should not use signalish for typeof operator in attr and prop values', async () => {
    await expect('<div attr:foo={typeof bar} prop:bar={typeof bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",typeof bar);e.bar=typeof bar;}});`
    );
  });

  it('should not use signalish for unary + operator in attr and prop values', async () => {
    await expect('<div attr:foo={+bar} prop:bar={+bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",+bar);e.bar=+bar;}});`
    );
  });

  it('should not use signalish for unary - operator in attr and prop values', async () => {
    await expect('<div attr:foo={-bar} prop:bar={-bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",-bar);e.bar=-bar;}});`
    );
  });

  it('should not use signalish for ! operator in attr and prop values', async () => {
    await expect('<div attr:foo={!bar} prop:bar={!bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",!bar);e.bar=!bar;}});`
    );
  });

  it('should not use signalish for ~ operator in attr and prop values', async () => {
    await expect('<div attr:foo={~bar} prop:bar={~bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",~bar);e.bar=~bar;}});`
    );
  });

  it('should not use signalish for void operator in attr and prop values', async () => {
    await expect('<div attr:foo={void bar} prop:bar={void bar} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",void bar);e.bar=void bar;}});`
    );
  });

  it('should not use signalish for delete operator in attr and prop values', async () => {
    await expect('<div attr:foo={delete bar.baz} prop:bar={delete bar.baz} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",delete bar.baz);e.bar=delete bar.baz;}});`
    );
  });
});
