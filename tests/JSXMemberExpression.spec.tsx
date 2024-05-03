describe('JSXMemberExpression', () => {
  it('should work with JSXMemberExpression', () => {
    const Member: Record<string, JSX.FC<any>> = {
      One({ title }) {
        return <p>{title}</p>;
      },
      Two: ({ title }) => <p>{title}</p>,
    };

    expect(
      <div>
        <Member.One title="One" />
        <Member.Two title="Two" />
      </div>
    ).toHaveInnerHTML('<p>One</p><p>Two</p>');
  });

  it('should work with lower case JSXMemberExpression', () => {
    const member: Record<string, JSX.FC<any>> = {
      el: ({ text }) => <p>{text}</p>,
    };

    expect(
      <div>
        <member.el text="one" />
      </div>
    ).toHaveInnerHTML('<p>one</p>');
  });
});
