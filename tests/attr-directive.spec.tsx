describe('attr:* directive', () => {
  it('should transform `attr:` directive with value', async () => {
    await expect('<div attr:foo="bar" />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{foo:"bar"});'
    );
  });

  it('should correct transform `attr:` directive with value', async () => {
    await expect('<div attr:foo-foo={1} />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{"foo-foo":1});'
    );
  });

  it('should render using `attr:` directive to set attributes', () => {
    const div = <div attr:foo="bar" />;

    expect(div).toHaveAttribute('foo', 'bar');
    expect(div).not.toHaveProperty('foo');
  });

  it.each([1, 1n, 0, Infinity, NaN])('should correct render using `attr:` directive to set attributes', (value) => {
    const div = <div attr:foo-foo={value} />;

    expect(div).toHaveAttribute('foo-foo', value.toString());
    expect(div).not.toHaveProperty('foo-foo');
  });
});
