describe('Style attribute', () => {
  it('should add style as a string', () => {
    expect(<div style="color: red; padding: 10px;" />).toHaveCssText(
      'color: red; padding: 10px;',
    );
  });

  it('should add style as an object', () => {
    expect(<div style={{
      color: 'black',
      border: '1px solid white',
    }} />).toHaveCssText(
      'color: black; border: 1px solid white;',
    );
  });

  it('should modify style', () => {
    const Menu = <nav style="padding: 10px; margin: 10px;" />;

    expect(Menu).toHaveCssText('padding: 10px; margin: 10px;');
    <Menu style={{ padding: '15px' }} />;
    expect(Menu).toHaveCssText('padding: 15px; margin: 10px;');
  });

  it('should add CSS custom property as a string', () => {
    expect(<div style="--x: red;" />).toHaveCssText('--x: red;');
  });

  it('should add CSS custom property as an object', () => {
    // @ts-expect-error
    expect(<div style={{ '--x': 'red' }} />).toHaveCssText('--x: red;');
  });

  it('should remove CSS custom property if value is null', () => {
    // @ts-expect-error
    const Block = <div style={{ '--x': '1', left: '10px' }} />;

    expect(Block).toHaveCssText('--x: 1; left: 10px;');
    <Block style={{ '--x': null }} />;
    expect(Block).toHaveCssText('left: 10px;');
  });

  it('should remove CSS custom property if value is ""', () => {
    // @ts-expect-error
    const Block = <div style={{ '--y': 'red', color: 'white' }} />;

    expect(Block).toHaveCssText('--y: red; color: white;');
    <Block style={{ '--y': '' }} />;
    expect(Block).toHaveCssText('color: white;');
  });
});
