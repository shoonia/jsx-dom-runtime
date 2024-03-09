describe('Child nodes', () => {
  it('should have a text', () => {
    expect(<span>hello</span>).toHaveOuterHTML('<span>hello</span>');
  });

  it.each([
    [0, /******************/ '<p>0</p>'],
    [1, /******************/ '<p>1</p>'],
    [5.5, /****************/ '<p>5.5</p>'],
    [-1, /*****************/ '<p>-1</p>'],
    [126, /****************/ '<p>126</p>'],
    [NaN, /****************/ '<p>NaN</p>'],
    [10n, /****************/ '<p>10</p>'],
    [Infinity, /***********/ '<p>Infinity</p>'],
    [-Infinity, /**********/ '<p>-Infinity</p>'],
    [true, /***************/ '<p>true</p>'],
    [[0, 1, NaN, true], /**/ '<p>01NaNtrue</p>'],
    [{}, /*****************/ '<p>[object Object]</p>'],
    [new Text('text'), /***/ '<p>text</p>'],
    [new Comment('x'), /**/ '<p><!--x--></p>']
  ])('should have a stringified child node if %s', (val, html) => {
    // @ts-expect-error
    expect(<p>{val}</p>).toHaveOuterHTML(html);
  });

  it.each([
    '',
    undefined,
    null,
    false,
    [],
    [[]],
    [[], undefined, null, false, ''],
  ])('should have empty tag if %s', (child) => {
    // @ts-expect-error
    expect(<div>{child}</div>).toHaveOuterHTML('<div></div>');
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

  it.each([
    [[[], undefined, null, false, ''], '<p></p>'],
    [[0, 1, 5.5, -1, 126, 1n], /*****/ '<p>015.5-11261</p>'],
    [[Infinity, -Infinity, NaN], /***/ '<p>Infinity-InfinityNaN</p>'],
    [[true], /***********************/ '<p>true</p>'],
    [[{}], /*************************/ '<p>[object Object]</p>'],
    [['text'], /*********************/ '<p>text</p>'],
    [['text', 'test'], /*************/ '<p>texttest</p>'],
    [[new Text('text')], /***********/ '<p>text</p>'],
    [[new Comment('x')], /***********/ '<p><!--x--></p>'],
    [[<s>text</s>], /****************/ '<p><s>text</s></p>'],
    [[<s>text</s>, <b>test</b>], /***/ '<p><s>text</s><b>test</b></p>'],
  ])('should work with JSXSpreadChild = %s', (val, html) => {
    // @ts-expect-error
    expect(<p>{...val}</p>).toHaveOuterHTML(html);
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

  it('should add custom Web Component tag', () => {
    expect(<web-component />).toHaveOuterHTML('<web-component></web-component>');
  });

  it('should work with deep nested child nodes', () => {
    expect(
      <div>
        { ['one ', ['two ', ['three']]] }
      </div>
    ).toHaveOuterHTML('<div>one two three</div>');
  });

  it('should have a space', () => {
    expect(<div> </div>).toHaveOuterHTML('<div> </div>');
    expect(<div>{' '}</div>).toHaveOuterHTML('<div> </div>');
    expect(<div>{[' ']}</div>).toHaveOuterHTML('<div> </div>');
  });

  it('should not have any child nodes', () => {
    expect(<article />).toHaveOuterHTML('<article></article>');
    expect(<article></article>).toHaveOuterHTML('<article></article>');
  });
});
