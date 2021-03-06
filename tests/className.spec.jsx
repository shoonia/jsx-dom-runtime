describe('className', () => {
  it('should have className', () => {
    expect(<aside className="one" />).toHaveClass('one');
  });

  it('should have a few class names when pass the array', () => {
    expect(<table className={['one', 'two']} />).toHaveClass('one two');
  });

  it('should filtered class names', () => {
    const classNames = [ undefined, 'one', null, 0, NaN, 'two', false ];

    expect(<div className={classNames} />).toHaveOuterHTML('<div class="one two"></div>');
  });
});
