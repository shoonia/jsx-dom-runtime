describe('className / class', () => {
  it('should have className', () => {
    expect(<aside className="one" />).toHaveClass('one');
  });

  it('should have a class attribute', () => {
    expect(<i class="a b c" />).toHaveClass('a b c');
  });
});
