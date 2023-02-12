describe('className / class', () => {
  it('should have className', () => {
    // @ts-expect-error
    expect(<aside className="one" />).toHaveClass('one');
  });

  it('should have a class attribute', () => {
    expect(<i class="a b c" />).toHaveClass('a b c');
  });

  it('should have not break function componet props', () => {
    const App = ({ className }) => <div data-test={className} />;

    expect(<App className="qa" />).toHaveOuterHTML('<div data-test="qa"></div>');
  });

  it('should have not break Web Component attr', () => {
    // @ts-expect-error
    expect(<qa-test classname="name"></qa-test>).toHaveOuterHTML('<qa-test classname="name"></qa-test>');
  });
});
