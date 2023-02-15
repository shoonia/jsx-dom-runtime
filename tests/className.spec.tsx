describe('className / class', () => {
  it('should have a class attribute', () => {
    // @ts-expect-error
    expect(<aside className="one" />).toHaveClass('one');
    // @ts-expect-error
    expect(<aside className="one" />).toHaveOuterHTML('<aside class="one"></aside>');
  });

  it('should have class attributes', () => {
    expect(<i class="a b c" />).toHaveClass('a b c');
  });

  it('should have not break function componet props', () => {
    const App = ({ className }) => <div data-test={className} />;

    expect(<App className="qa" />).toHaveOuterHTML('<div data-test="qa"></div>');
  });

  it('should have not break Web Component attr', () => {
    expect(<web-component class="a" className="b"></web-component>).toHaveOuterHTML(
      '<web-component class="a" classname="b"></web-component>',
    );
  });
});
