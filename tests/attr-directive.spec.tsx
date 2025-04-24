describe('attr:* directive', () => {
  it('should transform `attr:` directive with value', async () => {
    await expect('<input attr:foo="bar" />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("input",{foo:"bar"});'
    );
  });

  it('should correct transform `attr:` directive with value', async () => {
    await expect('<input attr:foo-foo={1} />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("input",{"foo-foo":1});'
    );
  });

  it('should render using `attr:` directive to set attributes', () => {
    const input = <input attr:foo="bar" />;

    expect(input).toHaveAttribute('foo', 'bar');
    expect(input).not.toHaveProperty('foo');
  });

  it.each([1, 1n, 0, 'hello'])('should correct render using `attr:` directive to set attributes', (value) => {
    const input = <input attr:foo-foo={value} />;

    expect(input).toHaveAttribute('foo-foo', value.toString());
    expect(input).not.toHaveProperty('foo-foo');
  });
});
