describe('Data attribute', () => {
  it('should have the data attributes', () => {
    expect(<p data-test="text">text</p>).toHaveOuterHTML('<p data-test="text">text</p>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b data-on />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on={true} />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on={false} />).toHaveOuterHTML('<b data-on="false"></b>');
    expect(<b data-on="true" />).toHaveOuterHTML('<b data-on="true"></b>');
    expect(<b data-on="false" />).toHaveOuterHTML('<b data-on="false"></b>');
  });

  it('shoud not set attribute with null or undefined', () => {
    expect(<span data-on={null} />).toHaveOuterHTML('<span></span>');
    expect(<span data-on={undefined} />).toHaveOuterHTML('<span></span>');
  });

  it.each([
    [0,               '0'],
    [0,               '0'],
    [1,               '1'],
    [-1,              '-1'],
    [3.14,            '3.14'],
    [NaN,             'NaN'],
    [5n,              '5'],
    [Infinity,        'Infinity'],
    [-Infinity,       '-Infinity'],
    [[],              ''],
    [[0, 1],          '0,1'],
    [() => {},        '() => {}'],
    [function x() {}, 'function x() {}'],
    [{},              '[object Object]'],
    [{ x: 10 },       '[object Object]'],
  ])('should stringify attribute', (data, value) => {
    expect(<ol data-str={data} />).toHaveAttribute('data-str', value);
  });
});
