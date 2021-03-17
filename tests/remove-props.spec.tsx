describe('Remove props', () => {
  it('should add and remove props if null', () => {
    const Box = <div />;

    expect(Box).toHaveOuterHTML('<div></div>');
    <Box title="one" />;
    expect(Box).toHaveOuterHTML('<div title="one"></div>');
    <Box title={null} />;
    expect(Box).toHaveOuterHTML('<div></div>');
  });

  it('should add and remove props if undefined', () => {
    const Box = <div />;

    expect(Box).toHaveOuterHTML('<div></div>');
    <Box title="one" />;
    expect(Box).toHaveOuterHTML('<div title="one"></div>');
    <Box title={undefined} />;
    expect(Box).toHaveOuterHTML('<div></div>');
  });

  it('should add and remove props if false', () => {
    const Box = <div />;

    expect(Box).toHaveOuterHTML('<div></div>');
    <Box title="one" />;
    expect(Box).toHaveOuterHTML('<div title="one"></div>');
    <Box title={false} />;
    expect(Box).toHaveOuterHTML('<div></div>');
  });
});
