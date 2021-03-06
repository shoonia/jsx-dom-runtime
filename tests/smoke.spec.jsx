
describe('Smoke', () => {
  it('should create a div', () => {
    expect(<div />).toHaveOuterHTML('<div></div>');
  });

  it('should have a text', () => {
    expect(<span>hello</span>).toHaveOuterHTML('<span>hello</span>');
  });

  it.each([
    [0, /******************/ '<p>0</p>'],
    [1, /******************/ '<p>1</p>'],
    [-1, /*****************/ '<p>-1</p>'],
    [126, /****************/ '<p>126</p>'],
    [NaN, /****************/ '<p>NaN</p>'],
    [Infinity, /***********/ '<p>Infinity</p>'],
    [-Infinity, /**********/ '<p>-Infinity</p>'],
    [true, /***************/ '<p>true</p>'],
    [[0, 1, NaN, true], /**/ '<p>01NaNtrue</p>'],
  ])('should have a stringified child node if %s', (val, html) => {
    expect(<p>{val}</p>).toHaveOuterHTML(html);
  });

  it.each([
    undefined,
    null,
    false,
    [],
  ])('should haven\'t child nodes if %s', (child) => {
    expect(<div>{child}</div>).toHaveOuterHTML('<div></div>');
  });

  it('should have a child node', () => {
    expect(
      <div>
        <p>text</p>
      </div>
    ).toHaveOuterHTML('<div><p>text</p></div>');
  });

  it('should have two children nodes', () => {
    expect(
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
    ).toHaveOuterHTML(
      '<ul><li>one</li><li>two</li></ul>',
    );
  });

  it('should have two children nodes with text', () => {
    expect(
      <pre>
        one
        <code>two</code>
      </pre>
    ).toHaveOuterHTML(
      '<pre>one<code>two</code></pre>',
    );
  });

  it('should have two children nodes as array', () => {
    expect(
      <div>
        {
          [
            <nav />,
            <span />,
            'text',
          ]
        }
      </div>
    ).toHaveOuterHTML(
      '<div><nav></nav><span></span>text</div>',
    );
  });
});
