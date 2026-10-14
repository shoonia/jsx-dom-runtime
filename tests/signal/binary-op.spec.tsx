import { jsxImport, signalishImport } from '../utils/t';

describe('binary operator behavior', () => {
    it('should not use signalish for + operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo + bar} prop:bar={foo + bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo+bar);e.bar=foo+bar;}});`
        );
    });

    it('should not use signalish for - operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo - bar} prop:bar={foo - bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo-bar);e.bar=foo-bar;}});`
        );
    });

    it('should not use signalish for / operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo / bar} prop:bar={foo / bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo/bar);e.bar=foo/bar;}});`
        );
    });

    it('should not use signalish for % operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo % bar} prop:bar={foo % bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo%bar);e.bar=foo%bar;}});`
        );
    });

    it('should not use signalish for * operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo * bar} prop:bar={foo * bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo*bar);e.bar=foo*bar;}});`
        );
    });

    it('should not use signalish for ** operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo ** bar} prop:bar={foo ** bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo**bar);e.bar=foo**bar;}});`
        );
    });

    it('should not use signalish for & operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo & bar} prop:bar={foo & bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo&bar);e.bar=foo&bar;}});`
        );
    });

    it('should not use signalish for | operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo | bar} prop:bar={foo | bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo|bar);e.bar=foo|bar;}});`
        );
    });

    it('should not use signalish for >> operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo >> bar} prop:bar={foo >> bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo>>bar);e.bar=foo>>bar;}});`
        );
    });

    it('should not use signalish for >>> operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo >>> bar} prop:bar={foo >>> bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo>>>bar);e.bar=foo>>>bar;}});`
        );
    });

    it('should not use signalish for << operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo << bar} prop:bar={foo << bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo<<bar);e.bar=foo<<bar;}});`
        );
    });

    it('should not use signalish for ^ operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo ^ bar} prop:bar={foo ^ bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo^bar);e.bar=foo^bar;}});`
        );
    });

    it('should not use signalish for == operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo == bar} prop:bar={foo == bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo==bar);e.bar=foo==bar;}});`
        );
    });

    it('should not use signalish for === operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo === bar} prop:bar={foo === bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo===bar);e.bar=foo===bar;}});`
        );
    });

    it('should not use signalish for != operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo != bar} prop:bar={foo != bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo!=bar);e.bar=foo!=bar;}});`
        );
    });

    it('should not use signalish for !== operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo !== bar} prop:bar={foo !== bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo!==bar);e.bar=foo!==bar;}});`
        );
    });

    it('should not use signalish for instanceof operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo instanceof bar} prop:bar={foo instanceof bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo instanceof bar);e.bar=foo instanceof bar;}});`
        );
    });

    it('should not use signalish for in operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo in bar} prop:bar={foo in bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo in bar);e.bar=foo in bar;}});`
        );
    });

    it('should not use signalish for > operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo > bar} prop:bar={foo > bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo>bar);e.bar=foo>bar;}});`
        );
    });

    it('should not use signalish for < operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo < bar} prop:bar={foo < bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo<bar);e.bar=foo<bar;}});`
        );
    });

    it('should not use signalish for >= operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo >= bar} prop:bar={foo >= bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo>=bar);e.bar=foo>=bar;}});`
        );
    });

    it('should not use signalish for <= operator in prop and attr values', async () => {
        await expect('<div attr:foo={foo <= bar} prop:bar={foo <= bar} />').toBeTransform(
            jsxImport`_jsx("div",{ref:e=>{e.setAttribute("foo",foo<=bar);e.bar=foo<=bar;}});`
        );
    });

    it('should use signalish for binary ?? attr and prop values', async () => {
        await expect('<div attr:foo={foo ?? bar} prop:bar={foo ?? bar} />').toBeTransform(
            signalishImport`_jsx("div",{ref:e=>{_setSignalish(foo??bar,i=>e.setAttribute("foo",i));_setSignalish(foo??bar,i=>e.bar=i);}});`
        );
    });

    it('should use signalish for binary || attr and prop values', async () => {
        await expect('<div attr:foo={foo || bar} prop:bar={foo || bar} />').toBeTransform(
            signalishImport`_jsx("div",{ref:e=>{_setSignalish(foo||bar,i=>e.setAttribute("foo",i));_setSignalish(foo||bar,i=>e.bar=i);}});`
        );
    });

    it('should use signalish for binary && attr and prop values', async () => {
        await expect('<div attr:foo={foo && bar} prop:bar={foo && bar} />').toBeTransform(
            signalishImport`_jsx("div",{ref:e=>{_setSignalish(foo&&bar,i=>e.setAttribute("foo",i));_setSignalish(foo&&bar,i=>e.bar=i);}});`
        );
    });
});
