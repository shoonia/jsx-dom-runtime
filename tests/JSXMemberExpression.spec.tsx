describe('JSXMemberExpression', () => {
  it('should work with JSXMemberExpression', () => {
    const Member = {
      One({ title }) {
        return <p>{title}</p>;
      },
      Two: ({ title }) => <p>{title}</p>,
    } as const;

    expect(
      <div>
        <Member.One title="One" />
        <Member.Two title="Two" />
      </div>
    ).toHaveInnerHTML('<p>One</p><p>Two</p>');
  });

  it('should work with lower case JSXMemberExpression', () => {
    const member = {
      el: ({ text }) => <p>{text}</p>,
    } as const;

    expect(
      <div>
        <member.el text="one" />
      </div>
    ).toHaveInnerHTML('<p>one</p>');
  });
});
