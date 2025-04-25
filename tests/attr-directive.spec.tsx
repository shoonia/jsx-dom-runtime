import { jsxImport } from './utils';

describe('attr:* directive', () => {
  it('should transform `attr:*` directive with value', async () => {
    await expect('<div attr:foo="bar" />').toBeTransform(
      jsxImport`_jsx("div",{ref:e=>e.setAttribute("foo","bar")});`
    );
  });

  it('should support a few `attr:*` directive to set attributes', async () => {
    await expect('<div attr:foo-foo={1} attr:bar-bar="2" />').toBeTransform(
      jsxImport`_jsx("div",{ref:[e=>e.setAttribute("foo-foo",1),e=>e.setAttribute("bar-bar","2")]});`
    );
  });

  it('should join `ref` with `attr:*` directive expressions', async () => {
    await expect('<div ref={(e) => console.log(e)} attr:foo-foo={1} attr:bar-bar="2" />').toBeTransform(
      jsxImport`_jsx("div",{ref:[e=>console.log(e),e=>e.setAttribute("foo-foo",1),e=>e.setAttribute("bar-bar","2")]});`
    );
  });

  it('should render using `attr:*` directive to set attributes', () => {
    const div = <div attr:foo="bar" />;

    expect(div).toHaveAttribute('foo', 'bar');
    expect(div).not.toHaveProperty('foo');
  });

  it('should render a few `attr:*` directives', () => {
    const div = <div attr:foo="bar" attr:bar="foo" />;

    expect(div).toHaveAttribute('foo', 'bar');
    expect(div).toHaveAttribute('bar', 'foo');
    expect(div).not.toHaveProperty('foo');
    expect(div).not.toHaveProperty('bar');
  });

  it.each([1, 1n, 0, Infinity, NaN])('should correct render using `attr:` directive to set attributes', (value) => {
    const div = <div attr:foo-foo={value} />;

    expect(div).toHaveAttribute('foo-foo', value.toString());
    expect(div).not.toHaveProperty('foo-foo');
  });
});
