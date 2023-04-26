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

  it('should add CSS custom property as a string', () => {
    expect(<div style="--x: red;" />).toHaveCssText('--x: red;');
  });

  it('should add CSS custom property as an object', () => {
    expect(<div style={{ '--x': 'red' }} />).toHaveCssText('--x: red;');
    expect(<div style={{ '--y': 'yellow', '--b': 'blue' }} />).toHaveCssText('--y: yellow; --b: blue;');
  });

  it('should add inline CSS with `cssText` property', () => {
    expect(<p style={{ cssText: 'padding: 15px; margin: 15px;' }} />).toHaveCssText('padding: 15px; margin: 15px;');
  });
});
