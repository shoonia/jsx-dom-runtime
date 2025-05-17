import { jsxImport } from './utils';

describe('directive prop:*', () => {
  it('should transform `prop:*` directive with value', async () => {
    await expect('<div prop:foo="bar" />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>e.foo="bar"});`
    );
  });

  it('should support a few `prop:*` directive to set properties', async () => {
    await expect('<div prop:foo-foo={1} prop:bar-bar="2" />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>{e["foo-foo"]=1;e["bar-bar"]="2"}});`
    );
  });

  it('should join `ref` with `prop:*` directive expressions', async () => {
    await expect('<div ref={(e) => console.log(e)} prop:foo-foo={1} prop:bar="2" />').toBeTransform(
      jsxImport`_jsx("div",{ref:[e=>{e["foo-foo"]=1;e.bar="2"},e=>console.log(e)]});`
    );
  });

  it('should transform empty value to `true`', async () => {
    await expect('<div prop:_someData />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>e._someData=true});`
    );
  });

  it('should render using `prop:*` directive to set properties', () => {
    const div = <div prop:foo="bar" />;

    expect(div).toHaveProperty('foo', 'bar');
    expect(div).not.toHaveAttribute('foo');
  });

  it('should render a few `prop:*` directives', () => {
    const div = <div prop:foo="bar" prop:bar="foo" />;

    expect(div).toHaveProperty('foo', 'bar');
    expect(div).toHaveProperty('bar', 'foo');
    expect(div).not.toHaveAttribute('foo');
    expect(div).not.toHaveAttribute('bar');
  });

  it.each(
    [1, 1n, 0, Infinity, NaN, {}, [], ()=>0, null, 'Hello']
  )('should correct render using `prop:` directive to set properties', (value) => {
    const div = <div prop:foo-foo={value} />;

    expect(div).toHaveProperty('foo-foo', value);
    expect(div).not.toHaveAttribute('foo-foo');
  });

  it('should transform event handlers to properties', async () => {
    expect('<div onclick={fn} />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>e.onclick=fn});`
    );
  });

  it('should transform a few event handlers to properties', async () => {
    expect('<input type="text" onclick={fn1} onchange={fn2} oninvalid={fn3} onblur={fn4} />').toBeTransform(
      jsxImport`_jsx("input",{ref:e=>{e.onclick=fn1;e.onchange=fn2;e.oninvalid=fn3;e.onblur=fn4},type:"text"});`
    );
  });
});
